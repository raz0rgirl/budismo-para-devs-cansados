import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  open?: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
  public faqs: FaqItem[] = [
    {
      question: '👉 Preciso ser budista para aproveitar o conteúdo do ebook?',
      answer: 'Não. O livro apresenta toda base necessária dos ensinamentos budistas de uma forma prática e aplicável à vida cotidiana, focando em princípios universais que podem beneficiar qualquer pessoa, independentemente de sua religião ou crença.',
      open: false
    },
    {
      question: '👉 Como receberei o ebook?',
      answer: 'Ao se inscrever na lista, enviaremos um link por e-mail ou whatsapp para comprar o ebook em formato PDF ou EPUB assim que ele for lançado numa plataforma independente.',
      open: false
    },
    {
      question: '👉 Posso compartilhar o material?',
      answer: 'O material em si é protegido por direitos autorais, mas você pode compartilhar os ensinamentos aprendidos com outras pessoas. Plante estas boas sementes por aí!',
      open: false
    },
    {
      question: '👉 Como faço para me inscrever na lista de espera?',
      answer: 'Basta preencher o formulário alado com seu nome e e-mail ou whatsapp. Assim que o ebook estiver disponível, você receberá uma notificação com o link para adquiri-lo.',
      open: false
    },
    {
      question: '👉 Existe alguma maneira de adquirir o ebook gratuitamente?',
      answer: 'Sim! Para aqueles que possuem assinatura no Kindle unlimited o livro estará disponível gratuitamente.',
    }
  ];

  toggle(index: number) {
    for (let i = 0; i < this.faqs.length; i++) {
      if (i === index) {
        this.faqs[i].open = !this.faqs[i].open;
      } else {
        this.faqs[i].open = false;
      }
    }
  }

  toggleByFaq(faq: FaqItem) {
    const idx = this.faqs.indexOf(faq);
    if (idx === -1) return;
    this.toggle(idx);
  }
}
