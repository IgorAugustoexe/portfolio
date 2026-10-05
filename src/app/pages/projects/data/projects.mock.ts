import type { Project } from "../models/project.model";
import portfolioImage01 from "@/assets/images/projects/portfolio/01.jpg";
import portfolioImage02 from "@/assets/images/projects/portfolio/02.png";
import portfolioImage03 from "@/assets/images/projects/portfolio/03.jpg";
import taskManagerImage01 from "@/assets/images/projects/task-manager/01.png";
import taskManagerImage02 from "@/assets/images/projects/task-manager/02.png";
import taskManagerImage03 from "@/assets/images/projects/task-manager/03.png";

export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    category: "web",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Styled Components" },
    ],
    images: [
      {
        src: portfolioImage01,
        alt: { pt: "Visão inicial do portfólio", en: "Portfolio initial view" },
      },
      {
        src: portfolioImage02,
        alt: { pt: "Página interna do portfólio", en: "Portfolio internal page" },
      },
      {
        src: portfolioImage03,
        alt: { pt: "Grade de projetos do portfólio", en: "Portfolio project grid" },
      },
    ],
    content: {
      pt: {
        summary: "Portfólio pessoal bilíngue, responsivo e orientado por dados locais.",
        description:
          "Uma aplicação criada para apresentar experiência, habilidades e projetos com uma navegação simples. O conteúdo foi separado da interface para facilitar futuras alterações.",
        challenges:
          "Criar uma estrutura responsiva com sidebar estática no desktop e manter a navegação consistente entre os dois idiomas.",
        learnings:
          "Organização de um tema central, rotas localizadas e componentes reutilizáveis sem adicionar complexidade desnecessária.",
      },
      en: {
        summary: "A bilingual, responsive personal portfolio driven by local data.",
        description:
          "An application created to present experience, skills and projects through simple navigation. Content is separated from the interface to make future changes easier.",
        challenges:
          "Creating a responsive structure with a static desktop sidebar while keeping navigation consistent across both languages.",
        learnings:
          "Organizing a central theme, localized routes and reusable components without adding unnecessary complexity.",
      },
    },
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    category: "academic",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Local Storage" },
    ],
    images: [
      {
        src: taskManagerImage01,
        alt: { pt: "Tela principal do gerenciador", en: "Task manager main screen" },
      },
      {
        src: taskManagerImage02,
        alt: { pt: "Organização de tarefas", en: "Task organization" },
      },
      {
        src: taskManagerImage03,
        alt: { pt: "Detalhes de uma tarefa", en: "Task details" },
      },
    ],
    content: {
      pt: {
        summary: "Aplicação local para organizar atividades e acompanhar o andamento das tarefas.",
        description:
          "Um exemplo de aplicação focada em produtividade com dados persistidos no próprio navegador e componentes preparados para diferentes estados.",
        challenges:
          "Manter as interações simples em telas pequenas e representar claramente os estados de cada tarefa.",
        learnings: `Modelagem de dados locais, composição de componentes e criação de uma experiência consistente sem backend Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut eros nec nibh placerat fringilla non ac nunc. Curabitur vel placerat metus. Pellentesque faucibus sapien leo, sed consequat magna pretium at. Aenean eget gravida ante. Suspendisse sit amet massa eu mi pulvinar pretium. Duis ultrices odio at urna rhoncus, sit amet scelerisque nisl pulvinar. Cras nec quam blandit, auctor nunc id, placerat nisi. Donec fringilla ligula sit amet nibh feugiat placerat. Fusce egestas dignissim leo. Curabitur id dolor at est elementum dignissim in at libero. Cras ac justo non velit venenatis mollis quis sit amet diam. Aenean suscipit ut dui et dictum.
Vestibulum ullamcorper euismod facilisis. Donec laoreet mauris id magna convallis luctus. Mauris volutpat commodo ligula quis ultrices. Sed tristique urna nec nibh egestas pellentesque. Ut tincidunt, odio ac egestas iaculis, ipsum tellus consequat dui, sed mattis justo ipsum vitae tellus. Quisque accumsan pretium libero sed tempor. Nam hendrerit vitae nisi vitae ullamcorper. Aenean eu ligula maximus urna consequat dictum eu ut enim. Phasellus ut quam a nisi maximus faucibus ut in metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus mollis tortor vitae ultrices.
Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tempus ante non nibh semper, et malesuada elit tincidunt. Aliquam sit amet dolor rhoncus eros pharetra auctor eget sit amet arcu. Vestibulum quis ligula nec sem porttitor placerat. Sed porttitor dictum mauris et lobortis. Nunc viverra nulla sed tellus dictum eleifend eu nec mauris. Mauris faucibus metus ac orci sollicitudin luctus. Donec libero ligula, accumsan quis elit ut, laoreet sodales diam. Proin in tincidunt lorem, non semper tellus. Aliquam erat volutpat. Quisque pulvinar vel elit porta porta. Vestibulum magna ante, laoreet vitae finibus vitae, ornare vitae quam. Quisque elit libero, dictum sit amet consequat non, convallis ut tortor. Cras eget vulputate augue, et convallis magna.
Aliquam erat volutpat. Sed nulla dolor, tincidunt non pulvinar nec, mollis facilisis neque. Donec tortor justo, finibus id ornare eget, auctor vel diam. Cras gravida elit sed nulla dignissim, sed maximus libero vestibulum. In hac habitasse platea dictumst. In metus leo, dignissim non porttitor nec, vulputate sed dolor. Aenean ultrices viverra libero, eu iaculis tellus ullamcorper vel. Vestibulum sed ipsum quis odio scelerisque molestie. Nulla non tempus ante. Mauris risus felis, tincidunt vitae massa ut, venenatis malesuada quam. Sed auctor, lorem eu hendrerit sagittis, metus mauris fringilla lacus, id sodales sem justo in ex. Suspendisse in tortor non arcu venenatis facilisis. Vivamus porta nisl id elit fringilla euismod.

Integer dictum tortor a massa malesuada, vulputate pulvinar tellus scelerisque. Vivamus accumsan est sit amet justo bibendum lobortis. Ut pulvinar ac diam non consequat. Morbi gravida eu orci ac eleifend. Donec ultrices, magna in rutrum sagittis, ante odio dapibus enim, rutrum aliquet ante sapien molestie mauris. Proin convallis et nisi non feugiat. Nunc imperdiet porttitor nulla auctor ullamcorper.

Nam et dignissim magna, ac suscipit elit. Maecenas vel blandit leo, eu fringilla lacus. Aenean auctor nulla et nibh aliquam, at ultricies urna convallis. Aliquam erat volutpat. Mauris odio sapien, tristique non odio nec, tempus dignissim dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce pulvinar non lorem quis vehicula. Ut nec augue feugiat, pharetra lacus ac, varius dolor.

Mauris varius id nunc ut pretium. Morbi sit amet risus at risus interdum euismod et a est. Maecenas ut vestibulum risus, in dictum velit. Maecenas a dui eu turpis gravida dictum. Quisque bibendum ultricies ligula id blandit. Curabitur pellentesque risus sed sem sodales, non sodales metus vulputate. Cras a massa et lacus consequat efficitur vitae sed orci.

Nullam mattis sodales lacus, sit amet dignissim ligula tempus vitae. Suspendisse potenti. Maecenas hendrerit, magna ac rutrum luctus, sem libero vulputate tortor, sit amet interdum sem eros in elit. Nullam varius orci mauris, quis sollicitudin erat suscipit id. Ut vestibulum, tellus in pretium hendrerit, magna justo varius mauris, vel pretium eros massa ut augue. Sed semper, lacus in rutrum tincidunt, justo nisi lacinia mi, a laoreet risus neque vitae leo. Curabitur eget malesuada neque. Sed eu velit pretium, dapibus ante in, auctor eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac tincidunt arcu, sit amet semper nulla. Donec commodo tellus sed commodo rutrum. Curabitur id ullamcorper risus. Aenean ultrices viverra neque et cursus.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sollicitudin erat sed consequat sollicitudin. Phasellus semper eros vitae risus fermentum imperdiet. Proin sagittis gravida sapien, sit amet tincidunt sapien tristique vitae. Vivamus tincidunt libero in turpis varius, sed hendrerit dui imperdiet. Praesent lobortis fermentum augue vel molestie. Morbi velit velit, lacinia at lacus ut, vestibulum aliquam risus. Curabitur blandit ac enim a elementum. Aliquam erat volutpat. Nullam vel justo aliquam, commodo augue ac, euismod sem. Cras at mi elementum, fermentum lectus et, ullamcorper lacus. Pellentesque tristique augue tempus, semper magna a, hendrerit erat. Praesent euismod lectus dolor, eu convallis libero luctus at. Vivamus faucibus nec nisl non tincidunt.

Quisque ornare purus eget leo dapibus lacinia vel non lectus. Phasellus ultricies ipsum quis ultrices tristique. Morbi quis cursus ligula. Maecenas id convallis risus. Donec bibendum, mauris vitae ornare posuere, mi ante efficitur ex, in sodales massa nunc in dolor. Praesent in augue diam. Aliquam id nisl a velit porttitor elementum tincidunt eget ipsum. Pellentesque faucibus, sapien eu tincidunt lobortis, nisi purus tempus tellus, quis pharetra quam tortor non est. Nulla fermentum neque ac urna imperdiet interdum. Quisque mattis ligula eros, vitae egestas quam aliquet vitae.

Cras condimentum scelerisque lobortis. Vivamus mattis ultricies risus ut egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam mattis suscipit fermentum. Proin pulvinar non augue quis fringilla. Vestibulum tincidunt, est a ultrices tincidunt, mi orci dapibus orci, id ultrices lacus diam eu leo. Nulla blandit efficitur elit, ut sollicitudin enim semper nec. Ut hendrerit ac libero eget fermentum. Ut rhoncus lacinia imperdiet. Mauris pellentesque mattis odio, porttitor varius justo aliquet sed. Etiam luctus, ante nec mattis aliquam, lectus magna facilisis felis, nec elementum enim odio ac est. Aliquam a erat vehicula, porttitor ipsum et, faucibus augue. Etiam facilisis cursus est at tristique. Morbi ut laoreet neque. Etiam vel faucibus tellus.

Donec a tempus risus. Nullam tempor viverra elementum. Etiam tempus, turpis sit amet vehicula tempus, diam felis vulputate velit, in volutpat nunc libero nec erat. Nulla facilisi. Praesent vel vestibulum dui, eget imperdiet tortor. Pellentesque porttitor pharetra libero, eget vulputate dolor mollis eget. Etiam luctus libero at lorem vulputate, eu venenatis erat suscipit. Donec convallis velit sed commodo fermentum. Etiam ut posuere sapien, porta commodo dui. Cras id velit consectetur, euismod enim non, porttitor est. Vestibulum sed quam arcu.

Nunc pretium nulla ut risus tincidunt, eu pellentesque augue viverra. Ut pulvinar finibus arcu, a tempus nibh porta sollicitudin. Vestibulum gravida magna eget augue ornare, at malesuada massa interdum. Mauris ex mauris, porta quis commodo eget, viverra vel sapien. Phasellus consequat erat ac mauris efficitur accumsan. Donec pharetra elementum enim id volutpat. Pellentesque finibus odio eget ex porta fringilla. Vestibulum scelerisque, libero id tempus egestas, lacus magna dictum felis, eu tristique velit tortor quis dolor. Nam eleifend arcu diam, nec efficitur purus tempor eget. In elementum sapien ex, quis luctus odio rutrum eu. Fusce blandit enim et lectus rutrum tristique. Vestibulum pharetra dictum ipsum non lobortis. Proin in vulputate urna.

Nunc sagittis, nulla et scelerisque euismod, mauris lectus consequat est, non condimentum mi risus finibus elit. Fusce varius mattis metus, non tincidunt quam ultrices sed. Nullam congue rutrum nunc, rutrum mollis felis fermentum id. Vestibulum sollicitudin est consectetur, aliquam metus eu, tempus est. Nunc mollis massa vel purus eleifend tempor. Nulla id eros pulvinar, venenatis diam quis, euismod eros. Morbi rhoncus mi quis quam pharetra, a bibendum felis pretium. Integer magna sapien, tincidunt sed egestas quis, fringilla non nisi.

Nam et arcu et odio lacinia laoreet. Duis ac ultrices ante, eu faucibus leo. Mauris pulvinar ligula arcu, in finibus leo dictum vel. Sed malesuada, risus eget fermentum facilisis, tellus risus elementum mauris, nec dapibus augue erat sed est. Nam venenatis elit in ante facilisis mattis. Donec faucibus ligula eget odio blandit iaculis. Integer quis ipsum tristique leo egestas scelerisque. Mauris semper finibus ligula vitae imperdiet. Curabitur egestas, ex non interdum lobortis, diam velit egestas lectus, quis posuere ipsum quam nec tortor. Donec rutrum, ligula eget laoreet congue, ex justo feugiat arcu, quis consectetur arcu risus sed dui.

Vivamus efficitur faucibus ante in tempus. Aliquam euismod fringilla orci quis ultricies. Suspendisse pulvinar laoreet tellus, nec pulvinar leo facilisis non. Pellentesque vitae quam sed risus porttitor cursus. Vivamus ex nibh, imperdiet non nulla ut, egestas laoreet tellus. Donec euismod mi vitae massa suscipit elementum. Fusce sagittis eros purus, vitae consequat augue sollicitudin eu. Donec ullamcorper ultricies leo a consectetur. Aliquam varius eros mi, nec dignissim mauris ultricies vitae. Mauris quis posuere massa. Nullam varius mi turpis, iaculis pellentesque arcu fringilla nec. Pellentesque imperdiet enim sed diam luctus rhoncus. Vestibulum sem quam, laoreet sed porttitor blandit, convallis ac purus.`,
      },
      en: {
        summary: "A local application to organize activities and track task progress.",
        description:
          "A productivity-focused application example with data stored in the browser and components prepared for different states.",
        challenges: "Keeping interactions simple on small screens and clearly representing each task state.",
        learnings: "Local data modeling, component composition and creating a consistent experience without a backend.",
      },
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
