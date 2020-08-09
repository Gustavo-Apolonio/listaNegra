using System;

namespace backend.Utils
{
    public class ListaNegraConversor
    {
        public Models.Response.ListaNegraResponse ToResponseConversor(Models.TbListaNegra req)
        {
            Models.Response.ListaNegraResponse resp = new Models.Response.ListaNegraResponse();
            resp.Id = req.IdListaNegra;
            resp.Nome = req.NmPessoa;
            resp.Motivo = req.DsMotivo;
            resp.Inclusao = req.DtInclusao;
            return resp;
        }

        public Models.TbListaNegra ToTableConversor(Models.Request.ListaNegraRequest req)
        {
            Models.TbListaNegra resp = new Models.TbListaNegra();
            resp.NmPessoa = req.Nome;
            resp.DsMotivo = req.Motivo;
            resp.DtInclusao = DateTime.Now;
            return resp;
        }
    }
}