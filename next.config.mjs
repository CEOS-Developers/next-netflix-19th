/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/nowPlayingmovies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}`,
      },
      {
        source: '/api/popularMovies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}`,
      },
      {
        source: `/api/topRatedMovies`,
        destination: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}`,
      },
      {
        source: `/api/topRatedMoviesByPage`,
        has: [
          {
            type: 'query',
            key: 'pageNumber',
            value: '(?<pageNumber>.*)',
          },
        ],
        destination: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}&page=:pageNumber`,
      },
      {
        source: '/api/upComingMovies',
        destination: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}`,
      },
      {
        source: '/api/movieInfo/:path*',
        destination: `https://api.themoviedb.org/3/movie/:path*?language=en-US&api_key=${process.env.NEXT_PUBLIC_THEMOVIE_API_KEY}`,
      },
    ];
  },
};

export default nextConfig;
