import {God} from './god.model';
import {Boon} from './boon.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GodsService {
  backendUrl = 'http://localhost:8080/api/getGods';

  constructor(private http: HttpClient){ }

  getGodData(): Observable <any> {
    return this.http.get<any>(this.backendUrl)
  }

    private gods: God[] = [
        new God(
          'Aphrodite', 
          'Goddess of Love', 
          'https://brightrockmedia.com/wp-content/uploads/2020/10/aphrodite.jpg', 
          [
            new Boon ('Aphrodite"s Aid:', 'Your Call fires a seeking projectile that inflicts Charm'), 
            new Boon ('Blown Kiss:', 'Your Cast shoots farther and is stronger against undamaged foes'), 
            new Boon ('Broken Resolve:', 'Your Weak effects are more potent'), 
            new Boon ('Crush Shot:', 'Your Cast is a wide, short-range blast that inflicts Weak'), 
            new Boon ('Different League:', 'Resist some damage from nearby foes" attacks'), 
            new Boon ('Dying Lament:', 'When foes are slain they damage nearby foes and inflict Weak'), 
            new Boon ('Empty Inside:', 'Your Weak effects have a longer duration'), 
            new Boon ('Heartbreak Flourish:', 'Your Special deals more damage and inflicts Weak'), 
            new Boon ('Heartbreak Strike:', 'Your Attack deals more damage and inflicts Weak'), 
            new Boon ('Life Affirmation:', 'Any health chamber rewards are worth more'), 
            new Boon ('Passion Dash:', 'Your Dash inflicts damage where you end up, inflicting Weak'), 
            new Boon ('Sweet Surrender:', 'Weak-afflicted foes are also more susceptible to damage'), 
            new Boon ('Wave of Despair:', 'After you take damage, damage nearby foes and inflict Weak')
          ]
        ),
        new God(
          'Ares',
          'God of War', 
          'https://techraptor.net/sites/default/files/images/Hades%20Game%20Ares.jpg', 
          [
            new Boon ('Ares" Aid:', 'Your Call turns you into an Impervious Blade Rift for 1.2 Sec'), 
            new Boon ('Battle Rage:', 'After slaying a foe, your next Attack or Special deals more damage'), 
            new Boon ('Black Metal:', 'Your Blade Rift powers deal damage in a wider area'), 
            new Boon ('Blade Dash:', 'Your Dash creates a Blade Rift where you started'), 
            new Boon ('Blood Frenzy:', 'After using Death Defiance, deal more damage that encounter'), 
            new Boon ('Curse of Agony:', 'Your Attack inflicts Doom'),
            new Boon ('Curse of Pain:', 'Your Special inflicts Doom'), 
            new Boon ('Curse of Vengeance:', 'After you take damage, inflict Doom on surrounding foes'), 
            new Boon ('Dire Misfortune:', 'Your Doom effects deal more damage when applied multiple times'), 
            new Boon ('Engulfing Vortex:', 'Your Blade Rift effects last longer and pull foes in'), 
            new Boon ('Impending Doom:', 'Your Doom effects deal more damage, after +0.5 Sec'), 
            new Boon ('Slicing Shot:', 'Your Cast sends a Blade Rift hurling ahead'),
            new Boon ('Urge to Kill:', 'Your Attack and Cast deal more damage')
          ]
        ),
        new God(
          'Artemis', 
          'Goddess of the Hunt', 
          'https://i.pinimg.com/originals/bb/f5/c2/bbf5c2c4ac913ac8baff84783f1fab26.jpg', 
          [
            new Boon ('Artemis" Aid:', 'Your Call fires a seeking arrow with +35% Critical chance'), 
            new Boon ('Clean Kill:', 'Your Critical effects deal even more damage'), 
            new Boon ('Deadly Flourish:', 'Your Special is stronger, with +20% chance to deal Critical Damage'), 
            new Boon ('Deadly Strike:', 'Your Attack is stronger, with +15% chance to deal Critical damage'), 
            new Boon ('Exit Wounds:', 'Your foes take damage when your Cast stuck in them is dislodged'), 
            new Boon ('Hide Breaker:', 'Your Critical effects deal even more damage to Armor'), 
            new Boon ('Hunter Instinct:', 'Your God Gauge charges faster when you deal Critical damage'), 
            new Boon ('Hunter"s Mark:', 'After you deal Critical damage to a foe, a foe near it is Marked'), 
            new Boon ('Hunter Dash:', 'Your Dash-Strike deals more damage'), 
            new Boon ('Pressure Points:', 'Any damage you deal has a chance to be Critical'), 
            new Boon ('Support Fire:', 'After you hit with an Attack, Cast or Special, fire a seeking arrow'),
            new Boon ('True Shot:', 'Your Cast seeks foes, with a 10% chance to deal Critical damage')
          ]
        ),
        new God(
          'Athena', 
          'Goddess of Wisdom', 
          'https://i.pinimg.com/originals/0a/2e/26/0a2e26e60b460275d86279b288a5be46.jpg', 
          [
            new Boon ('Athena"s Aid:', 'Your Call briefly makes you Invulnerable and Deflect all attacks'), 
            new Boon ('Blinding Flash:', 'Your abilities that can Deflect also make foes Exposed for 5 Sec'), 
            new Boon ('Brilliant Riposte:', 'When you Deflect attacks, they deal more damage'), 
            new Boon ('Bronze Skin:', 'Resist damage from foes" attacks'), 
            new Boon ('Deathless Stand:', 'Death Defiance makes you Impervious longer. Replenish 1 charge now'), 
            new Boon ('Divine Dash:', 'Your Dash deals damage and can Deflect'), 
            new Boon ('Divine Flourish:', 'Your Special is stronger, and can Deflect'), 
            new Boon ('Divine Strike:', 'Your Attack is stronger, and can Deflect'), 
            new Boon ('Holy Shield:', 'After you take damage, damage nearby foes and briefly Deflect'), 
            new Boon ('Last Stand:', 'Death Defiance restores more Health than usual. Replenish 1 charge now'), 
            new Boon ('Phalanx Shot:', 'Your Cast damages foes in a small area, and can Deflect'),
            new Boon ('Proud Bearing:', 'You begin each Encounter with your God Gauge partly full'), 
            new Boon ('Sure Footing:', 'Resist damage from Traps')
          ]
        ),
        new God(
          'Demeter', 
          'Goddess of Seasons', 
          'https://assets.rockpapershotgun.com/images/2020/01/demeter-hades-1-1212x682.jpg/RPSS/thumbnail/1920x1080/format/jpg/quality/75', 
          [
            new Boon ('Arctic Blast:', 'Applying 10 stacks of Chill causes a blast, clearing the effect'),
            new Boon ('Crystal Beam:', 'Your Cast drops a crystal that fires a beam straight ahead for 5 sec'), 
            new Boon ('Demeter"s Aid:', 'Your Call creates a winter vortex for 5 Sec., deals damage every 0.25 Sec inflicting Chill'), 
            new Boon ('Frost Flourish:', 'Your Special is stronger and inflicts Chill'), 
            new Boon ('Frozen Touch:', 'After you take damage, damage and completely Chill your foe'), 
            new Boon ('Frost Strike:', 'Your Attack is stronger and inflicts Chill'), 
            new Boon ('Glacial Glare:', 'Your Cast fires longer and inflicts Chill'), 
            new Boon ('Killing Freeze:', 'Applying Chill to all enemies causes them to Slow and Decay'), 
            new Boon ('Mistral Dash:', 'Your Dash shoots a gust ahead that inflicts Chill'), 
            new Boon ('Nourished Soul:', 'Any Health effects are more potent. Restore +30% now'), 
            new Boon ('Rare Crop:', 'Your Boons become Common, then gain Rarity every 3 Encounter(s)'), 
            new Boon ('Ravenous Will:', 'While you have no Cast, take 10% less damage and deal more'), 
            new Boon ('Snow Burst:', 'Whenever you Cast, damage nearby foes and inflict Chill')
          ]
        ),
        new God(
          'Dionysus', 
          'God of Wine', 
          'https://assets.primagames.com/media/images/news/hades-what-are-duo-boons-how-to-get-them.jpg', 
          [
            new Boon ('After Party:', 'If your Health is low after Encounters, restore to the threshold'), 
            new Boon ('Bad Influence:', 'Deal more damage while 3 foes are Hangover-afflicted'), 
            new Boon ('Dionysus" Aid:', 'Your Call inflicts Hangover to foes all around you for 1.5 sec.'), 
            new Boon ('Drunken Dash:', 'Your Dash inflicts foes near you with Hangover'), 
            new Boon ('Drunken Flourish:', 'Your Special inflicts Hangover'), 
            new Boon ('Drunken Strike:', 'Your Attack inflicts Hangover'), 
            new Boon ('High Tolerance:', 'Take less damage while standing in Festive Fog'), 
            new Boon ('Numbing Sensation:', 'Your Hangover effects also make foes move slower'), 
            new Boon ('Peer Pressure:', 'Hangover-afflicted foes contaminate other nearby foes every 4 Sec'),
            new Boon ('Positive Outlook:', 'Take less damage while at 40% Health or below'), 
            new Boon ('Premium Vintage:', 'Gain Health when you pick up Nectar. Receive 1 Nectar now'), 
            new Boon ('Strong Drink:', 'Using a Fountain restores all Health and gives you bonus damage'), 
            new Boon ('Trippy Shot:', 'Your Cast lobs a projectile that bursts into Festive Fog')
          ]
        ),
        new God(
          'Hermes', 
          'God of Swiftness', 
          'https://pbs.twimg.com/media/D85uczdUwAAmO3j.jpg', 
          [
            new Boon ('Auto Reload:', 'You regenerate Cast Ammo faster'), 
            new Boon ('Flurry Cast:', 'Your Cast is +X% faster and fully automatic'), 
            new Boon ('Greater Evasion:', 'You have +X% chance to Dodge'), 
            new Boon ('Greater Haste:', 'You move X% faster'), 
            new Boon ('Greatest Reflex:', 'Your You can Dash +X more time(s) in a row'), 
            new Boon ('Hyper Sprint:', 'For X seconds after you Dash, become Sturdy and run +100% faster'), 
            new Boon ('Quick Favor:', 'Your Call charges up automatically'), 
            new Boon ('Quick Recovery:', 'After you take damage, quickly Dash to recover up to X% Health lost'), 
            new Boon ('Rush Delivery:', 'You deal bonus damage based on any bonus move speed'), 
            new Boon ('Second Wind:', 'After using Call, gain Dodge chance and move speed for 6 sec.'), 
            new Boon ('Positive Outlook:', 'Take less damage while at 40% Health or below'), 
            new Boon ('Side Hustle:', 'Each time you enter a Chamber, gain a bit wealth'), 
            new Boon ('Swift Flourish:', 'Your Special is +X% faster')
          ]
        ),
        new God(
          'Poseidon', 
          'God of the Sea', 
          'https://cdn.staticneo.com/ew/thumb/c/c2/Hades_poseidon_7o2uG.png/662px-Hades_poseidon_7o2uG.png', 
          [
            new Boon ('Boiling Point:', 'Your God Gauge charges faster when you take damage'), 
            new Boon ('Breaking Wave:', 'Slamming foes into walls or corners creates a watery blast in the area'), 
            new Boon ('Flood Shot:', 'Your Cast damages foes in an area and knocks them away'), 
            new Boon ('Hydraulic Might:', 'Your Attack and Special are stronger the first 10 Sec. in Encounter(s)'), 
            new Boon ('Ocean"s Bounty:', 'Any Gemstone, Darkness or Obols chamber rewards are worth more'), 
            new Boon ('Poseidon"s Aid:', 'Your Call makes you surge into foes while Impervious for 1.2 sec'), 
            new Boon ('Razor Shoals:', 'Using knock-away effects also Rupture foes'), 
            new Boon ('Rip Current:', 'Your Call pulls in foes and the effect lasts longer'), 
            new Boon ('Sunken Treasure:', 'Gain an assortment of Gemstone, Darkness, Obols and Health'), 
            new Boon ('Tempest Flourish:', 'Your Special deals more damage and knocks foes away'), 
            new Boon ('Tempest Strike:', 'Your Attack deals more damage and knocks foes away'), 
            new Boon ('Tidal Dash:', 'Your Dash damages foes in an area and knocks them away'), 
            new Boon ('Typhoon"s Fury:', 'You deal more damage when slamming foes into barriers'), 
            new Boon ('Wave Pounding:', 'Your boons with Knock-Away effects deal bonus damage to bosses')
          ]
        ),
        new God(
          'Zeus', 
          'King of the Olympians', 
          'https://static.wikia.nocookie.net/hades/images/3/3e/Zeus-0.png/revision/latest/scale-to-width-down/1000?cb=20181212211019', 
          [
            new Boon ('Billowing Strength:', 'After using Call, you deal more damage for 15 sec'), 
            new Boon ('Clouded Judgment:', 'Your God Gauge charges faster when you deal or take damage'), 
            new Boon ('Double Strike:', 'Your lightning bolt effects have a chance to strike twice'), 
            new Boon ('Electric Shot:', 'Your Cast is a burst of chain-lightning that bounces between foes'), 
            new Boon ('Heaven"s Vengeance:', 'After you take damage, your foe is struck by lightning'), 
            new Boon ('High Voltage:', 'Your lightning bolt effects deal damage in a larger area'), 
            new Boon ('Lightning Reflexes:', 'After you Dash just before getting hit, a bolt strikes a nearby foes'), 
            new Boon ('Lightning Strike:', 'Your Attack emits chain-lightning when you damage a foe'), 
            new Boon ('Thunder Dash:', 'Your Dash causes a lightning bolt to strike nearby foes'), 
            new Boon ('Thunder Flourish:', 'Your Special causes a lightning bolt to strike nearby foes'), 
            new Boon ('Static Discharge:', 'Your lightning effects also make foes Jolted'), 
            new Boon ('Storm Lightning:', 'Your chain-lightning effects bounce more times before expiring'), 
            new Boon ('Zeus" Aid:', 'Your Call makes lightning strike nearby foes repeatedly for 1.5 sec.')
          ]
        )
      ];

    getGods(){
        return this.gods.slice();
    }

    getGotByName(godName: string){
      return this.gods.find(god => {
        return god.name == godName
      });
    }
}