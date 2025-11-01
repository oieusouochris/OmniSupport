/**
 * MOCK: Simula a geração de um preview de link.
 */
export const getLinkPreviewAPI = async (url: string): Promise<any> => {
    if (!url || typeof url !== 'string') {
        throw new Error('URL é obrigatória');
    }

    await new Promise(resolve => setTimeout(resolve, 800));

    if (url.includes('google.com')) {
         return {
            title: 'Google',
            description: 'O motor de busca mais popular do mundo.',
            image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            url: 'https://www.google.com'
        };
    }

    return {
        title: `Preview para: ${url}`,
        description: 'Nenhuma descrição disponível para esta URL.',
        image: '',
        url: url
    };
};


/**
 * MOCK: Simula a obtenção de uma imagem de radar meteorológico.
 */
export const getRadarImageAPI = async (lat: string, lon: string): Promise<{ imageUrl: string }> => {
    if (!lat || !lon) {
        throw new Error('Latitude (lat) e Longitude (lon) são obrigatórias.');
    }
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const radarImageUrl = `https://via.placeholder.com/400x400.png?text=Radar+para+${lat},${lon}`;
    return { imageUrl: radarImageUrl };
};

/**
 * MOCK: Simula a captura de tela de uma URL.
 */
export const getScreenshotAPI = async (url: string): Promise<{ imageUrl: string, imageBase64: string }> => {
    if (!url || typeof url !== 'string') {
        throw new Error('URL é obrigatória');
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    const imageUrl = `https://via.placeholder.com/1280x720.png?text=Screenshot+de+${encodeURIComponent(url)}`;
    const imageBase64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`;

    return { imageUrl, imageBase64 };
};

// Em um app real, as funções para notícias e clima também estariam aqui.
