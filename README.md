# PWA-Rendu

I - WorkBox 

1) Listé des fonctionnalités offertes

- Passage hors ligne (Offline) => Les bases de l'écriture d'un service worker pour mettre en cache et servir du contenu hors ligne
-	Travailler avec Workbox => Utiliser Workbox pour écrire votre service worker
-	IndexedDB => Utiliser IndexedDB pour stocker et récupérer des données
-	Onglet dans la barre des tâches => Rendre votre application web installable et fournir des raccourcis d'application
-	Invitation et mesure de l'installation => Ajouter des invitations à l'installation dans l'application, et où placer le suivi de la réussite.
-	Autonomisation de votre PWA => Ajouter des capacités avancées, y compris l'accès au système de fichiers local et l'enregistrement en tant que gestionnaire de   fichiers.
-	Service Worker Includes => Générer dynamiquement une réponse de service worker en continu
-	Travailler avec des travailleurs => Utiliser des travailleurs web pour décharger le travail du thread principal

2) Méthodes de cache et utilisations possibles : 

networkFirst :
- Explication => tente de démarrer la requête en mode connexion. Si le réseau répond, la réponse est stockée dans le cache et servie. Si la réponse dépasse le délai d'attente défini ou si le réseau n'est pas accessible, SW renvoie la ressource présente dans le cache. Cette stratégie est intéressante lorsque vous souhaitez afficher les dernières données
- Use Case => Une application d'actualités pour afficher les dernières informations disponibles.
cacheFirst : 
- Explication => Retourne directement si la ressource est dans le cache. Sinon, la ressource est chargée. Utilisez cette stratégie pour les projets qui ne changeront pas (sinon vous aurez besoin d'une stratégie pour mettre à jour ces ressources lorsqu'elles changent).
- Use Case => Bibliothèques et frameworks externes : Si votre projet utilise des bibliothèques ou frameworks comme jQuery, Bootstrap ou FontAwesome, car ils changent rarement.

cacheOnly : 
- Explication => nous ne regardons que le cache. Si la ressource n'existe pas, nous obtenons une erreur. Par exemple, il est amusant de protéger la batterie lorsque le téléphone commence à faiblir.
- Use Case => Une application de liste de tâches hors ligne qui stocke toutes les données localement.


networkOnly : 
- Explication => Inverse, nous interrogeons toujours le réseau. Cette stratégie est un peu inutile car la même chose se produit si vous n'utilisez pas de service worker

- Use Case => Un site de streaming vidéo (twitch) en direct qui nécessite une connexion en temps réel.

staleWhileRevalidate : 
- Explication =>  Nous démarrons 2 requêtes en parallèle (une en cache et une sur le réseau). Comme la version en cache est plus réactive, elle est affichée. Mais cette version sera remplacée par les résultats de la requête lancée sur le réseau (si celle-ci se passe bien)

- Use Case => Un blog où les articles sont mis à jour de façon périodique, il est possible d'afficher d'abord le contenu en cache tout en mettant à jour les données en arrière-plan.

3) uses cases à intégrer dans le projet doctoliberal

networkFirst : Recherche de praticiens, la liste des praticiens est garantie d’être à jours (d’avoir les plus récents)

cacheFirst : Charger des images de profils de praticiens lié à un changement rare de photo de profil 

cacheOnly : Chargement de fichier CSS, le visuel de l’application change rarement permettant la mise en place du cacheOnly

networkOnly : Connexion et authentification des utilisateurs, en cas de création récente il faut être à la page pour garantir la sécurité 

staleWhileRevalidate : Chargement de documents lié aux factures, ordonnances. 

  
II - Page d'incitation à l'installation de PWA
  
2) Expliquer en quoi il serait intéressant de mettre en place une telle page

Amélioration de l'expérience utilisateur : 
- Explication => Les PWA sont installées sur un ordinateur de bureau ou un écran d’accueil mobile, cela les rend accessible et se charge rapidement. L’objectif est d’améliorer la sensation utilisateur favorisant une meilleure expérience plus porche du natif. 
Performances améliorées : 
- Explication => les PWA peuvent être mises en cache localement, cela les rend plus rapide & plus souple en cas de perte de connexion. 
Engagez les utilisateurs : 
- Explication => A l’instar des points de fidélités, une expérience d'installation simple et guidée, vous permettra de garder les utilisateurs sur votre PWA et à l'utiliser plus souvent favorisant le partage de l’application. 

