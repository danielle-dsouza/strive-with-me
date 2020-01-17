import { Injectable } from "@angular/core";
import { Faq } from './faq.model';

@Injectable()
export class FaqService {
    private faqs: Faq[] = [
        new Faq(
            "Is there an age restriction?",
            "Strive with ME does not have any strict age restrictions, but we cater towards young adults above 15. We invite you to join us one day and see if our group is a fit for you!"
        ),
        new Faq(
            "Where do you meet?",
            "We meet every Monday at James Robinson Public School from 8:00pm to 10:00pm. See our Contact Page for more details."
        ),
        new Faq(
            "How much does it cost?",
            "There is no fixed cost for attending meetings! The only costs come from any additional excursions and/or activities."
        ),
        new Faq(
            "How can I help?",
            "We are entirely run by volunteers passionate about making a difference. Contact us if you're interested a volunteer position!"
        )
    ]; //Or visit our Donate Page to make a small donation!

    getFaqs() {
        return this.faqs.slice();
    }
}