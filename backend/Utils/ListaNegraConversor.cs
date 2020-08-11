using System;

namespace backend.Utils
{
    public class ListaNegraConversor
    {
        public Models.Response.ListaNegraResponse ToResponse(Models.TbListaNegra req)
        {
            Models.Response.ListaNegraResponse resp = new Models.Response.ListaNegraResponse();
            resp.Id = req.IdListaNegra;
            resp.Nome = req.NmPessoa;
            resp.Motivo = req.DsMotivo;
            resp.Local = req.DsLocal;
            resp.Inclusao = req.DtInclusao;
            return resp;
        }

        public Models.TbListaNegra ToTable(Models.Request.ListaNegraRequest req)
        {
            Models.TbListaNegra resp = new Models.TbListaNegra();
            resp.NmPessoa = req.Nome;
            resp.DsMotivo = req.Motivo;
            resp.DsLocal = req.Local;
            if(req.Inclusao == null)
                resp.DtInclusao = DateTime.Now;
            else
                resp.DtInclusao = req.Inclusao;
            return resp;
        }
    }
}