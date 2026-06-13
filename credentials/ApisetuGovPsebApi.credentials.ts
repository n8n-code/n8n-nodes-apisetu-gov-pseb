import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovPsebApi implements ICredentialType {
        name = 'N8nDevApisetuGovPsebApi';

        displayName = 'Apisetu Gov Pseb API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovPseb/apisetu-gov-pseb.svg', dark: 'file:../nodes/ApisetuGovPseb/apisetu-gov-pseb.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/pseb/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/pseb/v3',
                        description: 'The base URL of your Apisetu Gov Pseb API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
