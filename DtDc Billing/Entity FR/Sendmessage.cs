//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DtDc_Billing.Entity_FR
{
    using System;
    using System.Collections.Generic;
    
    public partial class Sendmessage
    {
        public long M_ID { get; set; }
        public string Consignment_No { get; set; }
        public string Mobile_No { get; set; }
        public Nullable<System.DateTime> datetime_msg { get; set; }
        public Nullable<long> User_Id { get; set; }
        public string PF_Code { get; set; }
    
        public virtual Franchisee Franchisee { get; set; }
    }
}
