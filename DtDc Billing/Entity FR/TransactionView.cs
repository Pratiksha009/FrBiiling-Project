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
    
    public partial class TransactionView
    {
        public long T_id { get; set; }
        public string Customer_Id { get; set; }
        public Nullable<System.DateTime> booking_date { get; set; }
        public string compaddress { get; set; }
        public string Consignment_no { get; set; }
        public string Mode { get; set; }
        public string Weight_t { get; set; }
        public Nullable<double> Amount { get; set; }
        public string Company_id { get; set; }
        public string Pincode { get; set; }
        public string Pf_Code { get; set; }
        public Nullable<int> Quanntity { get; set; }
        public string Type_t { get; set; }
        public string Insurance { get; set; }
        public string Claimamount { get; set; }
        public string Percentage { get; set; }
        public string calinsuranceamount { get; set; }
        public string topay { get; set; }
        public Nullable<double> codAmount { get; set; }
        public string consignee { get; set; }
        public string consigner { get; set; }
        public string cod { get; set; }
        public Nullable<double> TopayAmount { get; set; }
        public Nullable<double> Topaycharges { get; set; }
        public Nullable<double> codcharges { get; set; }
        public Nullable<double> codtotalamount { get; set; }
        public Nullable<double> dtdcamount { get; set; }
        public string status_t { get; set; }
        public Nullable<double> rateperkg { get; set; }
        public Nullable<double> docketcharege { get; set; }
        public Nullable<double> fovcharge { get; set; }
        public Nullable<double> loadingcharge { get; set; }
        public Nullable<double> odocharge { get; set; }
        public Nullable<double> Risksurcharge { get; set; }
        public Nullable<long> Invoice_No { get; set; }
        public Nullable<double> BillAmount { get; set; }
        public string tembookingdate { get; set; }
        public Nullable<double> Actual_weight { get; set; }
        public Nullable<double> chargable_weight { get; set; }
        public Nullable<int> AdminEmp { get; set; }
        public Nullable<double> diff_weight { get; set; }
        public string Sender { get; set; }
        public string receiver { get; set; }
        public string Name { get; set; }
        public string tempdelivereddate { get; set; }
        public string receivedby { get; set; }
        public string remarks { get; set; }
        public string tempdeliveredtime { get; set; }
    }
}
