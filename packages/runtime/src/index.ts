class I18nScope {
    private locale: string | undefined;
    private scopeOptions: ScopeOptions = {};

    constructor(scopeOptions: ScopeOptions = {}) {
        this.scopeOptions = scopeOptions;
    }

    translate(key: string, params: Record<string, any> = {}) {
        const locale = this.getLocale();
        if (!locale) {
            return key; // Return the key if no locale is set
        }

        const localeData = this.getLocaleData();

        if (!localeData[key]) {
            return key;
        }

        const translation = localeData[key][locale] || key;

        // Replace parameters in the translation
        return translation.replace(/\{(\w+)\}/g, (match, p1) => {
            return params[p1] !== undefined ? params[p1] : match;
        });
    }

    getLocale() {
        return this.locale || undefined;
    }

    setLocale(locale: string) {
        this.locale = locale;
    }

    getLocaleData(): LocaleData {
        // return {
        //     "你好": {
        //         "zh-CN": "你好",
        //         "en-US": "Hello",
        //         "ru-RU": "Привет",
        //         "ja-JP": "こんにちは",
        //     },
        // };
        return this.scopeOptions.localeData || {};
    }
}

declare global {
    export var I18by: {
        scopes: I18nScope[]
    }
}

type ScopeOptions = {
    id?: string; // 作用域唯一id，一般可以使用package.json中的name字段
    library?: boolean; // 当使用在库中时应该置为true
    locale?: string; // 作用域的默认语言
    localeData?: LocaleData; // 作用域的语言数据
}

type LocaleData = {
    [key: string]: {
        [locale: string]: string;
    };
};

export { I18nScope };