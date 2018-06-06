module.export = {
	optimization: {
            splitChunks: {
                chunks: 'initial',
                cacheGroups: {
                    vendor: {
                        test: /node_modules\//,
                        enforce: true,
                        name: 'vendor',
                    },
                }
            }
}
}
