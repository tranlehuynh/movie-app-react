const ApiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '051f64c4cce9576568e631b9d4cd68f5',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default ApiConfig;