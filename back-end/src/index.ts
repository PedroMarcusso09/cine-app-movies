import app from "./server";

const PORT = process.env.PORT || 4000;

export const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;