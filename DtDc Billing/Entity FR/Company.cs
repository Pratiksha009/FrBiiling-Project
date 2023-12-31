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
    
    public partial class Company
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Company()
        {
            this.Nondoxes = new HashSet<Nondox>();
            this.Nondoxes1 = new HashSet<Nondox>();
            this.Nondoxes2 = new HashSet<Nondox>();
            this.Nondoxes3 = new HashSet<Nondox>();
            this.Priorities = new HashSet<Priority>();
            this.Priorities1 = new HashSet<Priority>();
            this.Ratems = new HashSet<Ratem>();
            this.Ratems1 = new HashSet<Ratem>();
            this.Ratems2 = new HashSet<Ratem>();
            this.Ratems3 = new HashSet<Ratem>();
            this.dtdcPlus = new HashSet<dtdcPlu>();
            this.Dtdc_Ptp = new HashSet<Dtdc_Ptp>();
            this.express_cargo = new HashSet<express_cargo>();
            this.Transactions = new HashSet<Transaction>();
        }
    
        public string Company_Id { get; set; }
        public int c_id { get; set; }
        public Nullable<long> Phone { get; set; }
        public string Email { get; set; }
        public Nullable<double> Insurance { get; set; }
        public Nullable<double> Minimum_Risk_Charge { get; set; }
        public string Other_Details { get; set; }
        public Nullable<double> Fuel_Sur_Charge { get; set; }
        public Nullable<double> Topay_Charge { get; set; }
        public Nullable<double> Cod_Charge { get; set; }
        public Nullable<double> Gec_Fuel_Sur_Charge { get; set; }
        public string Pf_code { get; set; }
        public string Company_Address { get; set; }
        public string Company_Name { get; set; }
        public Nullable<System.DateTime> Datetime_Comp { get; set; }
        public string Gst_No { get; set; }
        public string Pan_No { get; set; }
        public Nullable<double> Royalty_Charges { get; set; }
        public Nullable<double> D_Docket { get; set; }
        public Nullable<double> P_Docket { get; set; }
        public Nullable<double> E_Docket { get; set; }
        public Nullable<double> V_Docket { get; set; }
        public Nullable<double> I_Docket { get; set; }
        public Nullable<double> N_Docket { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public Nullable<double> G_Docket { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Nondox> Nondoxes { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Nondox> Nondoxes1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Nondox> Nondoxes2 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Nondox> Nondoxes3 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Priority> Priorities { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Priority> Priorities1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Ratem> Ratems { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Ratem> Ratems1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Ratem> Ratems2 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Ratem> Ratems3 { get; set; }
        public virtual Franchisee Franchisee { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<dtdcPlu> dtdcPlus { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Dtdc_Ptp> Dtdc_Ptp { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<express_cargo> express_cargo { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Transaction> Transactions { get; set; }
    }
}
