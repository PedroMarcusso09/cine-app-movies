import toast from "react-hot-toast";
import axios from "axios";

export function handleApiError(error: unknown, defaultMessage = "Erro inesperado") {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message =
      error.response?.data?.error ||
      error.response?.data?.message ||
      error.message ||
      defaultMessage;

    if (status === 400) {
      toast.error(message || "Requisição inválida ");
    } else if (status === 401) {
      toast.error("Acesso não autorizado ");
    } else if (status === 403) {
      toast.error("Você não tem permissão para isso ");
    } else if (status === 404) {
      toast.error(message || "Recurso não encontrado ");
    } else if (status === 409) {
      toast.error(message || "Conflito de dados ");
    } else if (status === 500) {
      toast.error("Erro interno no servidor");
    } else if (status === 502 || status === 503) {
      toast.error("Serviço temporariamente indisponível");
    } else {
      toast.error(message);
    }

    console.error("API Error:", {
      status,
      url: error.config?.url,
      method: error.config?.method,
      message,
      details: error.response?.data,
    });

    return;
  }

  if (error instanceof Error) {
    toast.error(error.message || defaultMessage);
    console.error("Erro genérico:", error);
    return;
  }

  toast.error(defaultMessage);
  console.error("Erro desconhecido:", error);
}
