module.exports = {
    apps: [
        {
            name: 'LembonganTRM',
            port: '4001',
            exec_mode: 'cluster',
            instances: 'max',
            script: 'build/index.js'
       }
    ]
}