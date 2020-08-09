using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_lista_negra")]
    public partial class TbListaNegra
    {
        [Key]
        [Column("id_lista_negra")]
        public int IdListaNegra { get; set; }
        [Required]
        [Column("nm_pessoa", TypeName = "varchar(100)")]
        public string NmPessoa { get; set; }
        [Required]
        [Column("ds_motivo", TypeName = "varchar(200)")]
        public string DsMotivo { get; set; }
        [Column("dt_inclusao", TypeName = "datetime")]
        public DateTime DtInclusao { get; set; }
    }
}
