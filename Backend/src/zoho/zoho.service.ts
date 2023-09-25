import { Injectable } from "@nestjs/common";

import { Pdf } from "src/pdf/pdf.entity";
import axios from "axios";

@Injectable()
export class ZohoService {
  private readonly zohoApiBaseUrl = process.env.ZOHO_API_BASE_URL; // Zoho API base URL
  private readonly apiKey = process.env.ZOHO_API_KEY; // Replace with your Zoho API key

  async addESignTags(pdf: Pdf): Promise<Pdf> {
    try {
      // lets const Zoho API endpoint for adding e-sign tags
      const endpoint = `${this.zohoApiBaseUrl}/some-endpoint`;

      // headers with the API key as a bearer token
      const headers = {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      };

      const requestBody = {
        // Add your e-sign tag data here
      };

      // HTTP request to Zoho API
      const response = await axios.post(endpoint, requestBody, { headers });

  return pdf;

    } catch (error) {
      // check errors for Zoho API integration
      console.error('Error adding e-sign tags:', error);
      throw new Error('Failed to add e-sign tags to PDF');
    }
  }
}
