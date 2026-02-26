'use strict';

const calculator = {
    currentOperand: '0',
    previousOperand: '',
    operation: null,
    shouldResetDisplay: false,

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.shouldResetDisplay) {
            this.currentOperand = number === '.' ? '0.' : number;
            this.shouldResetDisplay = false;
        } else {
            if (this.currentOperand === '0' && number !== '.') {
                this.currentOperand = number;
            } else {
                this.currentOperand += number;
            }
        }
        this.updateDisplay();
    },

    chooseOperation(op) {
        if (this.currentOperand === 'Error') return;
        if (this.operation && !this.shouldResetDisplay) {
            this.compute();
        }
        this.operation = op;
        this.previousOperand = this.currentOperand;
        this.shouldResetDisplay = true;
        this.updateDisplay();
        this.highlightOperator(op);
    },

    compute() {
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(curr)) return;

        let result;
        switch (this.operation) {
            case '+': result = prev + curr; break;
            case '−': result = prev - curr; break;
            case '×': result = prev * curr; break;
            case '÷':
                if (curr === 0) {
                    this.currentOperand = 'Error';
                    this.previousOperand = '';
                    this.operation = null;
                    this.shouldResetDisplay = true;
                    this.updateDisplay();
                    this.clearOperatorHighlight();
                    return;
                }
                result = prev / curr;
                break;
            default: return;
        }

        this.currentOperand = this.formatResult(result);
        this.previousOperand = '';
        this.operation = null;
        this.shouldResetDisplay = true;
        this.updateDisplay();
        this.clearOperatorHighlight();
    },

    formatResult(num) {
        if (!isFinite(num)) return 'Error';
        const str = parseFloat(num.toPrecision(12)).toString();
        if (str.length > 14) {
            return num.toExponential(6);
        }
        return str;
    },

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.updateDisplay();
        this.clearOperatorHighlight();
    },

    deleteDigit() {
        if (this.shouldResetDisplay || this.currentOperand === 'Error') {
            this.clear();
            return;
        }
        this.currentOperand = this.currentOperand.slice(0, -1) || '0';
        this.updateDisplay();
    },

    toggleSign() {
        if (this.currentOperand === '0' || this.currentOperand === 'Error') return;
        if (this.currentOperand.startsWith('-')) {
            this.currentOperand = this.currentOperand.slice(1);
        } else {
            this.currentOperand = '-' + this.currentOperand;
        }
        this.updateDisplay();
    },

    percentage() {
        if (this.currentOperand === 'Error') return;
        const num = parseFloat(this.currentOperand);
        if (isNaN(num)) return;
        this.currentOperand = this.formatResult(num / 100);
        this.updateDisplay();
    },

    updateDisplay() {
        document.getElementById('currentOperand').textContent = this.currentOperand;
        let prev = '';
        if (this.previousOperand && this.operation) {
            prev = `${this.previousOperand} ${this.operation}`;
        }
        document.getElementById('previousOperand').textContent = prev;
    },

    highlightOperator(op) {
        this.clearOperatorHighlight();
        const buttons = document.querySelectorAll('[data-action="operation"]');
        buttons.forEach(btn => {
            if (btn.dataset.value === op) {
                btn.classList.add('active');
            }
        });
    },

    clearOperatorHighlight() {
        document.querySelectorAll('.btn.operator').forEach(btn => {
            btn.classList.remove('active');
        });
    }
};

// Button clicks
document.querySelector('.buttons').addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const action = btn.dataset.action;
    const value = btn.dataset.value;

    switch (action) {
        case 'number':    calculator.appendNumber(value); break;
        case 'operation': calculator.chooseOperation(value); break;
        case 'compute':   calculator.compute(); break;
        case 'clear':     calculator.clear(); break;
        case 'toggleSign': calculator.toggleSign(); break;
        case 'percentage': calculator.percentage(); break;
    }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        calculator.appendNumber(e.key);
    } else if (e.key === '.') {
        calculator.appendNumber('.');
    } else if (e.key === '+') {
        calculator.chooseOperation('+');
    } else if (e.key === '-') {
        calculator.chooseOperation('−');
    } else if (e.key === '*') {
        calculator.chooseOperation('×');
    } else if (e.key === '/') {
        e.preventDefault();
        calculator.chooseOperation('÷');
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculator.compute();
    } else if (e.key === 'Escape') {
        calculator.clear();
    } else if (e.key === 'Backspace') {
        calculator.deleteDigit();
    } else if (e.key === '%') {
        calculator.percentage();
    }
});
