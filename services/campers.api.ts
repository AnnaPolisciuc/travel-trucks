import axios from 'axios';
import { CampersResponse, Camper } from '@/types/camper';

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = async ({
  equipment,
  ...rest
}: {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;
  equipment?: string[];
}) => {
  const params: Record<string, unknown> = { ...rest };

  if (equipment && equipment.length > 0) {
    equipment.forEach((item) => {
      params[item] = true;
    });
  }

  const response = await axios.get<CampersResponse>(`${API_URL}/campers`, {
    params,
  });

  return response.data.items;
};

export const getCamperById = async (id: string) => {
  const response = await axios.get<Camper>(`${API_URL}/campers/${id}`);
  return response.data;
};
