import { Component } from '@angular/core';
import { Card } from './card/card';

@Component({
  selector: 'app-chapters',
  imports: [Card],
  templateUrl: './chapters.html',
  styleUrl: './chapters.scss',
})
export class Chapters {
  protected readonly chapters = [
    {
      icon: '✨',
      title: 'Instanciando o Buda dentro de você',
      description:
        'Descubra como Siddhartha Gautama, um homem comum, se tornou o Buda e como isso pode despertar a nossa natureza iluminada.',
    },
    {
      icon: '👁️',
      title: 'Libertando-se da ilusão',
      description:
        'Entenda a natureza do sofrimento e como transcender as ilusões da mente, entendendo seu próprio código interno.',
    },
    {
      icon: '🧠',
      title: 'Desenvolvendo uma disciplina búdica',
      description:
        'Conheça práticas monásticas que nos ajudam a cultivar a disciplina mental e emocional.',
    },
    {
      icon: '🌊',
      title: 'Se tornando um líder zen',
      description:
        'Como renunciar seu ego pode te transformar num líder e como isso impacta positivamente sua vida pessoal e profissional.',
    },
    {
      icon: '🧘‍♀️',
      title: 'Meditação para Desenvolvedores Cansados',
      description:
        'Aprenda técnicas de meditação que ajudam a viver o momento presente e reduzir o estresse diário.',
    },
     {
      icon: '🌱',
      title: 'Plantando Boas Sementes',
      description:
        'Descubra novas maneiras de contribuir com a comunidade e o mundo ao seu redor, espalhando boas ações por onde passar.',
    },
  ];
}
