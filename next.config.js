/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  webpack: (config, { isServer }) => {
    // Configuração do loader para arquivos PDF
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });

    // Mantém a configuração existente do webpack, se houver
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
}