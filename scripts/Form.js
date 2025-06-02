class Form {
    selectors = {
        root: '[data-js-body]',
        form: '[data-js-form]',
        applicationsButton: '[data-js-applications]',
        closeFormButton: '[data-js-close-form]',
        overflow: '[data-js-overflow]' 
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.formElement = this.rootElement.querySelector(this.selectors.form)
        this.closeFormButtonElement = this.rootElement.querySelector(this.selectors.closeFormButton)
        this.overflowElement = this.rootElement.querySelector(this.selectors.overflow)
        this.applicationsButtonElement = this.rootElement.querySelector(this.selectors.applicationsButton)
        this.bindElement()
    }

    onApplicationsButtonClick = () => {
        this.formElement.classList.add(this.stateClasses.isActive)
        this.overflowElement.classList.add(this.stateClasses.isActive)
        document.documentElement.classList.add(this.stateClasses.isLock) 
    }

    offApplicationsButtonClick = () => {
        this.formElement.classList.remove(this.stateClasses.isActive)
        this.overflowElement.classList.remove(this.stateClasses.isActive)
        document.documentElement.classList.remove(this.stateClasses.isLock) 
    }

    bindElement() {
        this.applicationsButtonElement.addEventListener('click', this.onApplicationsButtonClick)
        this.overflowElement.addEventListener('click', this.offApplicationsButtonClick)
        this.closeFormButtonElement.addEventListener('click', this.offApplicationsButtonClick)
    }
}

export default Form;

