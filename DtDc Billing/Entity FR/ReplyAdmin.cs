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
    
    public partial class ReplyAdmin
    {
        public long Reply_ID { get; set; }
        public string Reply_Message { get; set; }
        public Nullable<long> Complaint_ID { get; set; }
        public string AdminOrUser { get; set; }
        public Nullable<System.DateTime> Replydate { get; set; }
    
        public virtual Complaint Complaint { get; set; }
        public virtual Complaint Complaint1 { get; set; }
        public virtual Complaint Complaint2 { get; set; }
        public virtual Complaint Complaint3 { get; set; }
    }
}
