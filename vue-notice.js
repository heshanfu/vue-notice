import Noty from 'noty'

const options = {
    layout: 'topRight',
    theme: 'mint',
    timeout: 3000,
}

const data = {
    options: {},

    setOptions (opts) {
        this.options = Object.assign({}, options, opts)
        return this
    },

    show (text, type = 'alert', opts = {}) {
        const params = Object.assign({}, this.options, opts, {
            type,
            text
        })
        new Noty(params).show()
    },

    success (text, opts = {}) {
        this.show(text, 'success', opts)
    },

    error (text, opts = {}) {
        this.show(text, 'error', opts)
    },

    warning (text, opts = {}) {
        this.show(text, 'warning', opts)
    },

    info (text, opts = {}) {
        this.show(text, 'info', opts)
    }
}

export default {
    install: (Vue, opts) => {
        const noty = data.setOptions(opts)
        Vue.prototype.$notice = noty
        // Vue.noty = noty
    }
}
