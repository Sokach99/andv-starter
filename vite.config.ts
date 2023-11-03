import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/

export default (configEnv: ConfigEnv) => {
    const { mode } = configEnv
    console.log(mode)
    return defineConfig({
        plugins: [
            vue(),
            vueJsx(),
            AutoImport({
                resolvers: [AntDesignVueResolver()],
                imports: ['vue', 'vue-router'],
                dts: './auto-imports.d.ts',
                eslintrc: {
                    enabled: true,
                    filepath: './.eslintrc-auto-import.json'
                }
            }),
            Components({
                resolvers: [
                    AntDesignVueResolver({
                        importStyle: false // css in js
                    })
                ]
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        // 本地服务配置
        server: {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            cors: true,
            open: false,
            port: 5000,
            host: true,
            proxy: {
                '/apis': {
                    target: 'https://cloud-app.com.cn/',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/apis/, '')
                },
                '/amap': {
                    target: 'https://restapi.amap.com/',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/amap/, '')
                }
            }
        }
    })
}
