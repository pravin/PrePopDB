import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, sqlite: SQLite, platform: Platform) {
    platform.ready().then(() => {
      sqlite.create({
        name: 'colors.db',
        location: 'default',
        createFromLocation: 1
      }).then((db: SQLiteObject) => {
        db.executeSql('select * from colors', {})
          .then(() => {
            console.log('Success')
          })
          .catch(e => console.error(JSON.stringify(e)));
      }).catch(e => console.error(JSON.stringify(e)));
    });
  }

}
