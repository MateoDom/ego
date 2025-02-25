import { ICar } from "@/models";
import axios from "axios";

export const getModels = async (): Promise<Array<ICar>> => {
    const response = await axios.get('https://challenge.egodesign.dev/api/models/');
    return response.data;
}