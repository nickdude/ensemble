import InquiryForm from "@/components/InquiryForm";
import FAQ from "@/components/FAQ";
import faqData from "@/data/home/faqData";

export default function ContactUs() {
  return (
    <main>
      <InquiryForm />
      <FAQ details={faqData.contactus} />
    </main>
  );
}
