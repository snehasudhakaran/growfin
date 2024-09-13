import React from 'react';

// Sample icon imports
import oracleIcon from '../assets/oracle.png';
import sapIcon from '../assets/sap.png';
import quickbooksIcon from '../assets/quickbooks.png';
import gdprIcon from '../assets/gdpr.png';
import securityIcon from '../assets/Security.png';
import bankOfAmericaIcon from '../assets/bankofamerica.png';
import jpMorganChaseIcon from '../assets/JP-Morgan-Chase-Logo.png';
import wellsFargoIcon from '../assets/wellsfargo.png';

const SecureSection = () => {
  return (
    <section className="px-4 secure">
      <div className="container mx-auto py-20">
        <div className="mb-16 text-center">
          <div className="mb-8">
            <h1 className="text-[25px] md:text-[30px] lg:text-[52px] font-bold early-customers-title">
              Secure, Seamless, and Scalable<br />Cash Application
            </h1>
          </div>

          <div className="text-[15px] md:text-[24px]">
            <p>
              Integrate seamlessly with all your banks and ERP, and keep your auditors<br />
              happy with state-of-the-art compliance and security measures.
            </p>
          </div>
        </div>

        <div className="secure-container flex flex-col md:flex-row justify-between">
          <div>
            <div>
              <h1 className="text-[20px] font-bold md:text-[32px] mb-20">Tight ERP Integration</h1>
            </div>
            <div>
              <h1 className="text-[20px] font-bold md:text-[32px] mb-20">Unmatched Security</h1>
            </div>
            <div>
              <h1 className="text-[20px] font-bold md:text-[32px] mb-20">Wide Bank Coverage</h1>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row gap-10 border-b border-black pb-5 mb-10">
              <p className="text-[18px] md:text-[20px]">
                Keep your books accurate and up-to-date,<br />
                and the auditors at bay with a seamless<br />
                2-way integration with your ERP.
              </p>
              <div className="flex justify-center gap-10 items-center">
                <div><img src={oracleIcon} alt="Oracle" /></div>
                <div><img src={sapIcon} alt="SAP" /></div>
                <div><img src={quickbooksIcon} alt="QuickBooks" /></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 border-b border-black pb-5 mb-10">
              <p className="text-[18px] md:text-[20px]">
                Stay confident and compliant with software<br />
                that’s approved by the world’s<br />
                most trusted certifications.
              </p>
              <div className="flex justify-center gap-10 items-center">
                <div><img src={gdprIcon} alt="GDPR" /></div>
                <div><img src={securityIcon} alt="Security" /></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 border-b border-black pb-5 mb-10">
              <p className="text-[18px] md:text-[20px]">
                Out-of-the-box connection to all your<br />
                bank accounts across geographies to read<br />
                payments in real-time.
              </p>
              <div className="flex justify-center gap-10 items-center">
                <div><img src={bankOfAmericaIcon} width="100" alt="Bank of America" /></div>
                <div><img src={jpMorganChaseIcon} width="100" alt="JP Morgan Chase" /></div>
                <div><img src={wellsFargoIcon} width="70" alt="Wells Fargo" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureSection;
