import logoAyruu from "@/images/logos/ayruu_logo.jpeg";
import logoBNP from "@/images/logos/bnp_paribas_logo.jpeg";
import logoKinetix from "@/images/logos/kinetixtech_logo.jpeg";
import logoLaPoste from "@/images/logos/la_poste_logo.jpeg";
import logoLeCloset from "@/images/logos/le_closet_logo.jpeg";
import logoLeFigaro from "@/images/logos/le_figaro_logo.jpeg";
import logoPayplug from "@/images/logos/payplug_logo.jpeg";
import logoRockUSupport from "@/images/logos/rock_u_support_logo.jpeg";
import logoAlf from "@/images/logos/thisisalf_logo.jpeg";
import logoTilli from "@/images/logos/tilli_logo.jpeg";

import { Props } from "../types";

export const JOBS_FR: Props[] = [
  {
    name: "Figaro",
    description: [
      "Le Figaro est un journal quotidien de la presse nationale française publié à Paris. Il est en 2022 le deuxième titre de la presse nationale française, avec une diffusion payée de 351 526 exemplaires. Affichant une audience de plus de 9 millions de visiteurs uniques, le site se caractérise par la qualité et la profondeur de ses contenus.",
      "J'ai rejoint le Figaro afin de participer au développement d’une plateforme en interne pour les pigistes. Ma mission a duré 6 mois.",
    ],
    missions: [
      "Création et implémentation de nouveaux designs (UI / UX) des pages",
      "Développement de formulaire divers pour la création et édition de commandes",
      "Création de l'interface d'administration pour les pigistes et les admins",
      "Création de nouvelles méthodes avec l’API Figaro",
      "Mise en place du nouveau thème avec MUI",
      "Refacto de code et implémentation de good practices",
      "Correction de bugs",
    ],
    title: "Développeur React Js",
    logo: logoLeFigaro,
    image: "/screenshots/le_figaro.jpeg",
    startDate: "2023-05",
    endDate: "2023-10",
    color: "#0F6FEF",
    website: "https://www.lefigaro.fr/",
  },
  {
    name: "Payplug",
    description: [
      "Payplug est la solution de paiement française pensée pour les commerçants, e-commerçants de toutes tailles et fintechs. Ils accompagnent aujourd’hui 20 000 PME telles que Hast et Plante pour tous, mais aussi de grands groupes comme Maisons du monde, Veepee et kiwi.com. Payplug fait partie du Groupe BPCE depuis 2017.",
      "J’ai rejoint l’équipe Nightbox afin de participer à l'ajout de fonctionnalités et l'amélioration de plusieurs de leurs applications. Durant ma mission de 6 mois, le nombre d’erreurs lié aux transactions a baissé de 40 % et le nombre de bugs a notamment baissé de 70 %.",
    ],
    missions: [
      "Création d’une bibliothèque de librairie (avec Ant Design) maison utilisé dans les différents projets",
      "Refonte totale du design sur l’ensemble des projets",
      "Implémentation de la traduction avec i18n",
      "Ajout de Sentry pour le tracking d’erreurs",
      "Optimisation des performances et de la rapidité d’affichage des pages avec des données complexes",
      "Développement de nouveaux composants pour les visuels graphiques des transactions",
      "Amélioration des fonctions de filtrage",
      "Ajout de tests automatisé",
      "Corrections de bugs",
    ],
    title: "Développeur React Js",
    logo: logoPayplug,
    image: "/screenshots/payplug.jpeg",
    startDate: "2022-10",
    endDate: "2023-04",
    color: "#ffd908",
    website: "https://www.payplug.com/",
  },
  {
    name: "Kinetix",
    description: [
      "Kinetix permet aux jeux d'intégrer une fonction d'émote générée par l'utilisateur et alimentée par l'IA. Grâce à cette fonction, les joueurs peuvent créer une émoticône personnalisée à partir de n'importe quelle vidéo, directement dans le jeu, et la faire jouer par leur avatar. Il suffit d'une caméra de téléphone ou de n'importe quelle vidéo pour que l'IA de Kinetix crée et joue une animation in-game.",
      "J'ai rejoint l’équipe plateforme quelques mois après la création de Kinetix, j'étais responsable du développement de leur plateforme ainsi que de leur site vitrine pendant presque 2 ans. Durant mon contrat, le nombre d’utilisateurs a augmenté de 400 % et le taux de conversion client a été amélioré de 30 %. Nous étions en méthodes agiles au sein d'une équipe de 3 développeurs avec un dev backend et ingénieur 3D.",
    ],
    missions: [
      "Création de la plateforme from scratch : intégration des différentes pages web de l'application avec routing avec React Js (16.8) et Redux ainsi que react-router",
      "Développement du studio : un éditeur d'animation 3D avec three.js, layout permettant l'édition d'assets 3D comme sur des logiciels tel que Blender, Unity et Maya",
      "Développement du Trim And Crop : fonctionnalité d'édition de vidéo au niveau du temps et de l'espace",
      "Test des différentes vues avec react-testing-library et de Redux avec sa librairie dédiée",
      "Ajout du suivi d'événements avec Hubspot et Segment",
      "Création du processus d'inscription pour les différents personas",
      "Implémentation des méthodes API avec Axios",
      "Ajout de tests automatisé",
    ],
    logo: logoKinetix,
    image: "/screenshots/kinetix.jpeg",
    title: "Développeur React Js / Next Js",
    startDate: "2021-01",
    endDate: "2022-09",
    color: "#EE4364",
    website: "https://www.kinetix.tech/",
  },
  {
    name: "Rock U Support",
    description: [
      "Rock U Support permet de motiver les sportifs à chaque étape de leur performance grâce à « la famille » sportive : des évènements, des coachs sportifs et des sportifs à proximité. Cerise sur le gâteau ! Lors de l’évènement, les sportifs sont encouragés grâce à des playlist stimulantes composées en temps réel par leurs proches avec des encouragements vocaux.",
      "J’ai rejoint l’équipe principale afin de participer à la création de fonctionnalités sur la prise de RDV. Ma mission a duré 3 semaines.",
    ],
    missions: [
      "Ajout des pages pour la création et inscriptions aux événements",
      "Création du formulaire pour la prise de rendez-vous en fonction du lieu de la séance de sport",
      "Refacto de code",
    ],
    title: "Développeur React Native",
    logo: logoRockUSupport,
    image: "/screenshots/rock_u_support.jpeg",
    startDate: "2020-12",
    endDate: "2020-12",
    color: "#EB5D28",
    website: "https://rockusupport.com/",
  },
  {
    name: "Ayruu",
    description: [
      "Ayruu est la plateforme technologique centralisant tous les déplacements professionnels dans les entreprises. L'objectif est d'améliorer l’expérience des déplacements professionnels des différents collaborateurs au sein d'une entreprise en mettant à leur disposition une application mobile simple, fluide et performante et d'une plateforme de gestion permettant de centraliser toute la gestion de leurs voyages.",
      "J’ai rejoint Ayruu pour une mission d’environ 1 mois. J’avais pour objectif d'implémenter de nouvelles fonctionnalités pour la réservation d'hôtels taxis et vol.",
    ],
    missions: [
      "Amélioration des pages pour la réservation de vol et d'hôtel avec l’ajout de nouvelles fonctionnalités comme la réservation de taxi et de vol",
      "Implémentation du suivi visuel façon timeline pour les différentes étapes du voyage, notamment l’avion",
      "Ajout de test",
    ],
    title: "Développeur React Js",
    logo: logoAyruu,
    image: "/screenshots/ayruu.jpeg",
    startDate: "2020-09",
    endDate: "2020-09",
    color: "#53AFFB",
    website: "https://ayruu.com/",
  },
  {
    name: "Tilli",
    description: [
      "Tilli propose des solutions d'entretien et de réparation pour les artisans, les personnes et les marques. Ils connectent les consommateurs et les marques au savoir-faire des artisans en leur permettant de réparer, ajuster et réinventer leurs tissus et leurs articles de maroquinerie. Actuellement, ils ont 580 artisans professionnels dans toute la France et 2 ateliers-boutiques à Paris.",
      "J’ai rejoint la team dev afin de créer de nouvelles fonctionnalités sur le site web et l’application mobile. Durant mon contrat, l'amélioration du formulaire de réservation nous a permis d’augmenter le taux de conversion de 10 %.",
    ],
    missions: [
      "Création de nouvelles pages de blog",
      "Création de plugins qui s’intègrent sur les sites des marques de luxe partenaires (Lafayette, Le BHV…)",
      "Ajout de nouvelles fonctionnalités sur la prise de commande, la réservation du calendrier, du panier, des slots",
      "Ajout de tests automatisés",
      "Mise en place et optimisations d'outils pour faire gagner du temps aux équipes opérationnelles Customer Care & Tillistes sur l’application mobile",
      "Résolution de bugs",
    ],
    title: "Développeur React Js",
    logo: logoTilli,
    image: "/screenshots/tilli.jpeg",
    startDate: "2020-02",
    endDate: "2020-06",
    website: "https://tilli.fr/",
  },
  {
    name: "Alf",
    description: [
      "alf est une plateforme PaaS de management de dossiers juridiques pour optimiser vos flux juridiques récurrents et gagner du temps pour vous et vos équipes.",
      "J’ai rejoint l'équipe plateforme dans un contexte de refonte et rebranding en early stage. Mon contrat a duré 3 mois.",
    ],
    missions: [
      "Développement de la plateforme, ajout de nouvelles vues (React Js, Ant Design, styled-components)",
      "Conception de la timeline pour les process (Ant Design)",
      "Création du processus de gestion des documents d'entreprise (édition, génération automatique…)",
      "Développement du backend, ajout de nouvelles routes (Node Js, GraphQL, Apollo)",
      "Mise en place de tests (Jest)",
      "Création des formulaires pour la gestion d'entreprise et users",
      "Page admin",
    ],
    title: "Développeur React Js",
    logo: logoAlf,
    image: "/screenshots/alf.jpeg",
    startDate: "2019-09",
    endDate: "2019-11",
    color: "#AE56F3",
    website: "https://thisisalf.com/",
  },
  {
    name: "Le Closet",
    description: [
      "LLe Closet est une start-up de mode qui révolutionne la consommation de vêtements, en remplaçant la possession par l'usage. Ses abonnées bénéficient d’un dressing illimité, ultra-tendance et diversifié, qu'elles reçoivent sous forme de box, directement à domicile ! Pour le même prix, elles peuvent recevoir autant de box successives qu'elles le souhaitent, en modifier le contenu, et le tout sans engagement.",
      "J’ai rejoint l'équipe afin d'améliorer le coverage de test et aussi de la refonte totale du visuel. Durant mon contrat le coverage de tests est passé de 20 % à 90 %.",
    ],
    missions: [
      "Refonte totale du site au niveau du front avec Bootstrap",
      "Mise en place des tests fonctionnels (Rspec, Factory Bot ...)",
      "Refonte de la partie admin avec Active Admin",
      "Mise en place de nouvelles fonctionnalités en back",
    ],
    title: "Développeur Fullstack Web",
    logo: logoLeCloset,
    image: "/screenshots/le_closet.jpeg",
    startDate: "2018-02",
    endDate: "2018-06",
    website: "https://www.lecloset.fr/",
  },
  {
    name: "BNP",
    description: [
      "BNP Paribas est une banque de premier plan en Europe avec un rayonnement international. Elle est présente dans 65 pays, avec plus de 190 000 collaborateurs, dont plus de 145 000 en Europe. Le Groupe accompagne l’ensemble de ses clients (particuliers, associations, entrepreneurs, PME, grandes entreprises et institutionnels) pour les aider à réaliser leurs projets en leur proposant des services de financement, d’investissement, d’épargne et de protection.",
      "J’ai rejoint l'équipe via le programme Matrice afin de créer un intranet destiné aux employés de la BNP. Mon contrat a duré 3 mois.",
    ],
    missions: [
      "Conception d'un intranet",
      "Design des différentes pages du site et de la BDD",
      "Création de l'API from scratch",
      "Création des différentes méthodes de gestions d'utilisateurs, rôles ...",
      "Implémentation de tests",
    ],
    title: "Développeur React Js",
    logo: logoBNP,
    image: "/screenshots/bnp.jpeg",
    startDate: "2017-08",
    endDate: "2018-01",
    color: "#39A676",
    website: "https://group.bnpparibas/",
  },
  {
    name: "La Poste",
    description: [
      "Premier réseau commercial de proximité en France. Présent dans plus de 49 pays, sur 5 continents, il a réalisé un chiffre d’affaires de 35,39 Mds€ en 2022 sur le territoire. En 2021, La Poste Groupe est devenue la première entreprise publique à adopter la qualité de société à mission. La Poste Groupe, avec ses 238 000 collaborateurs, naturellement et historiquement engagée pour la société, se mobilise pour rendre ses activités plus durables au regard des enjeux sociétaux et environnementaux, et pour faciliter la transition écologique de tous les Français.",
      "J’ai rejoint l'équipe via le programme Matrice afin de créer une application communautaire destinée aux habitants de petites villes. Mon contrat a duré 3 mois.",
    ],
    missions: [
      "Conception d'une application mobile communautaire",
      "Design des différentes vues avec les designers",
      "Implémentation d'API REST",
    ],
    title: "Développeur Mobile",
    logo: logoLaPoste,
    image: "/screenshots/la_poste.jpeg",
    startDate: "2017-08",
    endDate: "2018-01",
    color: "#2B3EA5",
    website: "https://www.laposte.fr/",
  },
];
