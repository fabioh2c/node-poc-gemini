const { GoogleAuth } = require('google-auth-library');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const credentialsPath = path.join(__dirname, process.env.GCP_KEY_FILE);

if (!fs.existsSync(credentialsPath)) {
  console.error(`Arquivo JSON de credenciais não encontrado em ${credentialsPath}`);
  process.exit(1);
}

async function getIdToken() {
  try {

    const credentials = JSON.parse(fs.readFileSync(process.env.GCP_KEY_FILE, 'utf8'));

    const googleAuth = new GoogleAuth({
      credentials: credentials,
      clientOptions: {
        servicePath: 'https://cloudfunctions.googleapis.com'
      }
    });

    const client = await googleAuth.getIdTokenClient(process.env.GCP_CLOUDFUNCTION_URL);
    const idToken = await client.idTokenProvider.fetchIdToken(process.env.GCP_CLOUDFUNCTION_URL);
    return idToken;
  
} catch (error) {
    throw new Error(`Erro ao obter o token de ID: ${error.message}`);
  }
}

async function getAnswer(prompt) {
  try {

    const idToken = await getIdToken();
    const response = await axios.post(
      process.env.GCP_CLOUDFUNCTION_URL,
      { prompt: prompt },
      {
        headers: {
          'Authorization': `Bearer ${idToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Retorno da Cloud Function:', response.data);
  } catch (error) {
    console.error('Erro ao chamar a Cloud Function:', error.response ? error.response.data : error.message);
  }
}

getAnswer('Onde está localizada a cidade de São Paulo?');