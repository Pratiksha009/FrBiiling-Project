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
    
    public partial class Cash
    {
        public int Cash_id { get; set; }
        public Nullable<double> Amount { get; set; }
        public Nullable<System.DateTime> inserteddate { get; set; }
        public string Invoiceno { get; set; }
        public Nullable<double> C_Tds_Amount { get; set; }
        public Nullable<double> C_Total_Amount { get; set; }
        public Nullable<long> Firm_Id { get; set; }
        public string Pfcode { get; set; }
        public Nullable<System.DateTime> tempinserteddate { get; set; }
        public Nullable<System.DateTime> tempch_date { get; set; }
    
        public virtual FirmDetail FirmDetail { get; set; }
        public virtual FirmDetail FirmDetail1 { get; set; }
    }
}