//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Squares.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class order
    {
        public int id { get; set; }
        public int orderType { get; set; }
        public int userID { get; set; }
        public int creationID { get; set; }
        public int orderStatus { get; set; }
    
        public virtual creation creation { get; set; }
        public virtual user user { get; set; }
    }
}
