import { Injectable } from "@angular/core";
import { Faq } from './faq.model';

@Injectable()
export class FaqService {
    private faqs: Faq[] = [
        new Faq(
            "Question?",
            "Answer."
        ),
        new Faq(
            "Question?",
            "Answer."
        ),
        new Faq(
            "Question?",
            "Answer."
        ),
        new Faq(
            "Question?",
            "Answer."
        )
    ];

    getFaqs() {
        return this.faqs.slice();
    }
}