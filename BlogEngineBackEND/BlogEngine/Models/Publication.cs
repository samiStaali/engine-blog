//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BlogEngine.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Publication
    {
        public long PublicationID { get; set; }
        public string Titre { get; set; }
        public Nullable<System.DateTime> DatePublication { get; set; }
        public string Contenu { get; set; }
        public Nullable<long> CategorieID { get; set; }
    
        public virtual Categorie Categorie { get; set; }
    }
}