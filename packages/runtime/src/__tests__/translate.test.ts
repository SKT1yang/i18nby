/**
 * 基本翻译功能
 */

import { test, describe, expect, beforeAll, afterEach } from 'vitest'
import { I18nScope } from '../index'

const scope = new I18nScope({
    id: "test",
    library: true,
    locale: "zh-CN",
    // 默认语言数据
    localeData: {
        "你好": {
            "zh-CN": "你好",
            "en-US": "Hello",
            "ru-RU": "Привет",
            "ja-JP": "こんにちは",
        },
    }
})

const t = scope.translate.bind(scope)

describe("翻译函数", () => {
    beforeAll(() => {
    })
    afterEach(() => {
    })
    test('基本翻译', async () => {
        expect(t("你好")).toBe("你好")
        scope.setLocale("en-US")
        expect(t("你好")).toBe("Hello")
        scope.setLocale("ru-RU")
        expect(t("你好")).toBe("Привет")
        scope.setLocale("ja-JP")
        expect(t("你好")).toBe("こんにちは")
    })
})