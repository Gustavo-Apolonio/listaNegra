namespace backend.Models.Response
{
    public class ErrorResponse
    {
        public string Erro { get; set; }
        public int Codigo { get; set; }

        public ErrorResponse(string e, int c)
        {
            this.Erro = e;
            this.Codigo = c;
        }
    }
}