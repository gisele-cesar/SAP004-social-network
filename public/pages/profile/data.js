export const loggedUser = (profile) => {
  firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      profile(user.displayName,
      );
    });
};

export const signOut = () => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut()
      .then(() => {
        window.location.href = '#login';
      })
      .catch(() => {
        growl({ text: 'Falha ao desconectar. Tente novamente', type: 'error', fadeAway: true, fadeAwayTimeout: 3000 });
      })
  }
};