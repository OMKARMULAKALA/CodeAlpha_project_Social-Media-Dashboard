// In your server-side code or a separate component handling the OAuth callback:
import axios from 'axios';

const handleOAuthCallback = async (platform, code) => {
  let tokenEndpoint, clientId, clientSecret, redirectUri;

  switch (platform) {
    case 'Facebook':
      tokenEndpoint = 'https://graph.facebook.com/v10.0/oauth/access_token';
      clientId = '819386352960013';
      clientSecret = 'd3a6a9f8e8b46948366af1624cde1895';
      redirectUri = 'http://localhost:5000/oauth/facebook/callback';
      break;
    case 'Twitter':
      tokenEndpoint = 'https://api.twitter.com/oauth2/token';
      clientId = '819386352960014';
      clientSecret = 'd3a6a9f8e8b46948366af1624cde1895';
      redirectUri = 'http://localhost:5000/oauth/instagram/callback';
      break;
    case 'Instagram':
      tokenEndpoint = 'https://api.instagram.com/oauth/access_token';
      clientId = '819386352960014';
      clientSecret = 'd3a6a9f8e8b46948366af1624cde1895';
      redirectUri = 'http://localhost:5000/oauth/twitter/callback';
      break;
    default:
      return;
  }

  try {
    const response = await axios.post(tokenEndpoint, {
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code,
      grant_type: 'authorization_code',
    });

    const accessToken = response.data.access_token;
    console.log(`${platform} access token:`, accessToken);

    // You can now use the access token to make authenticated requests
  } catch (error) {
    console.error(`Error exchanging code for ${platform} access token:`, error);
  }
};
