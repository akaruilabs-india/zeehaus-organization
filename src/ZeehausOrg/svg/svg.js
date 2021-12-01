import React from 'react'
import finance from './finance.svg'
import onlinetransaction from './onlinetransaction.svg'
import software from './software.svg'
import files from './files.svg'
import filter from './filter.svg'
import time from './time.svg'
import lead from './lead.svg'
import deal from './deal.svg'
import experts from './experts.svg'
import done from './done.svg'
import approve from './approve.svg'
import calendar from './calendar.svg'
import livestream from './livestream.svg'
import email from './email.svg' 
import platform from './platform.svg'
import referral from './referral.svg'
import upload from './upload.svg'
import promote from './promote.svg'
import dev from './dev.svg'
import dashboard from './dashboard.svg'
import dashboard2 from './dashboard_2.svg'
import house from './home.svg'
import check from './check.svg'
import offer from './offer.svg'
import faq from './faq.svg'
import call from './call.svg'
import setting from './setting.svg'
import houses from './houses.svg'
import meeting from './meeting.svg'
import growth from './growth.svg'
import docs from './docs.svg'
import bank from './bank.svg'
import blockchain from './blockchain.svg'
import transfer from './transfer.svg'
import noitems from './noitems.svg'
import profiles from './profiles.svg'
import profile from './profile.svg'
import home2 from './home2.svg'
import profile2 from './profile2.svg'
import profile3 from './profile3.svg'
import agreement from './agreement.svg'
import security from './security.svg'
import dashboard4 from './dashboard4.svg'
import phone2 from './phone2.svg'
import sell from './sale.svg'
import buy from './buy.svg'
import invest2 from './invest2.svg'
import agent from './agent.svg'
import analytic from './analytic.svg'
import bar from './bar.svg'
import bitcoin2 from './bitcoin2.svg'
import building2 from './building2.svg'
import calculator from './calculator.svg'
import card from './card.svg'
import cart from './cart.svg'
import chatmobile from './chatmobile.svg'
import choosehouse from './choosehouse.svg'
import creditcardmobile from './creditcardmobile.svg'
import flyingnotes from './flyingnotes.svg'
import heart from './heart.svg'
import house4 from './house4.svg'
import house10 from './house10.svg'
import houselocation from './houselocation.svg'
import housemagnifier from './housemagnifier.svg'
import houses_walk from './houses_walk.svg'
import housesale from './housesale.svg'
import houseselect from './houseselect.svg'
import mobilehouse from './mobilehouse.svg'
import money from './money.svg'
import notes from './notes.svg'
import settinghouse from './settinghouse.svg'
import vaultsafe from './vaultsafe.svg'
import wallet from './wallet.svg'
import currentlocation from './currentlocation.svg'
import problem_solving from './problem_solving.svg'
import chart from './chart.svg'
import secure_blockchain from './secure_blockchain.svg'
import two_factor_auth from './two_factor_auth.svg'
import learnmore from './learnmore.svg'
import sharing from './sharing.svg'
import mobile from './mobile.svg'
import progress from './progress.svg'
import meeting2 from './meeting2.svg'
import setup from './setup.svg'
import responsibility from './responsibility.svg'
import denied from './denied.svg'
import stock from './stock.svg'
import announcement from './announcement.svg'
import business_shop from './business_shop.svg'
import page_not_found from './page_not_found.svg'

const getSVG = (type, style, isRandom) => {
  
  let img = 'home2'
  switch (type) {
    case 'page_not_found' :
      img = page_not_found
      break
    case 'business_shop' :
      img = business_shop
      break
    case 'announcement' :
      img = announcement
      break
    case 'stock' :
      img = stock
      break
    case 'denied' :
      img = denied
      break
    case 'responsibility' :
      img = responsibility
      break
    case 'setup' :
      img = setup
      break
    case 'meeting2' :
      img = meeting2
      break
    case 'progress' :
      img = progress
      break
    case 'mobile' :
      img = mobile
      break
    case 'sharing' :
      img = sharing
      break
    case 'learnmore' :
      img = learnmore
      break 
    case 'two_factor_auth' :
      img = two_factor_auth
      break 
    case 'secure_blockchain' :
      img = secure_blockchain
      break 
    case 'chart' :
      img = chart
      break 
    case 'problem_solving' :
      img = problem_solving
      break 
    case 'currentlocation' :
      img = currentlocation
      break 
    case 'done' :
      img = done
      break 
    case 'approve' :
      img = approve
      break 
    case 'experts' :
      img = experts
      break  
    case 'promote' :
      img = promote
      break 
    case 'upload' :
      img = upload
      break 
    case 'deal' :
      img = deal
      break
    case 'referral' :
      img = referral
      break
    case 'calendar' :
      img = calendar
      break
    case 'email' :
      img = email
      break
    case 'wallet':
      img = wallet
      break
    case 'filter':
      img = filter
      break
    case 'finance':
      img = finance
      break
    case 'onlinetransaction':
      img = onlinetransaction
      break 
    case 'software':
      img = software
      break
    case 'files':
      img = files
      break 
    case 'vaultsafe':
      img = vaultsafe
      break
    case 'settinghouse':
      img = settinghouse
      break
    case 'notes':
      img = notes
      break
    case 'money':
      img = money
      break
    case 'mobilehouse':
      img = mobilehouse
      break
    case 'houseselect':
      img = houseselect
      break
    case 'housesale':
      img = housesale
      break
    case 'houses_walk':
      img = houses_walk
      break
    case 'housemagnifier':
      img = housemagnifier
      break
    case 'houselocation':
      img = houselocation
      break
    case 'house10':
      img = house10
      break
    case 'house4':
      img = house4
      break
    case 'heart':
      img = heart
      break
    case 'flyingnotes':
      img = flyingnotes
      break
    case 'creditcardmobile':
      img = creditcardmobile
      break
    case 'choosehouse':
      img = choosehouse
      break
    case 'chatmobile':
      img = chatmobile
      break
    case 'cart':
      img = cart
      break
    case 'card':
      img = card
      break
    case 'calculator':
      img = calculator
      break
    case 'building2':
      img = building2
      break
    case 'analytic':
      img = analytic
      break
    case 'bitcoin2':
      img = bitcoin2
      break
    case 'bar':
      img = bar
      break
    case 'dev':
      img = dev
      break
    case 'dashboard':
      img = dashboard
      break
    case 'home':
      img = dashboard2
      break
    case 'house':
      img = house
      break
    case 'check':
      img = check
      break
    case 'offer':
      img = offer
      break
    case 'faq':
      img = faq
      break
    case 'call':
      img = call
      break
    case 'setting':
      img = setting
    case 'houses':
      img = houses
      break
    case 'meeting':
      img = meeting
      break
    case 'growth':
      img = growth
      break
    case 'docs':
      img = docs
      break
    case 'bank':
      img = bank
      break
    case 'blockchain':
      img = blockchain
      break
    case 'transfer':
      img = transfer
      break
    case 'noitems':
      img = noitems
      break
    case 'profiles':
      img = profiles
      break
    case 'profile':
      img = profile
      break
    case 'home2':
      img = home2
      break
    case 'profile2':
      img = profile2
      break
    case 'profile3':
      img = profile3
      break
    case 'agreement':
      img = agreement
      break
    case 'security':
      img = security
      break
    case 'dashboard4':
      img = dashboard4
      break
    case 'phone2':
      img = phone2
      break
    case 'sell':
      img = sell
      break
    case 'buy':
      img = buy
      break
    case 'invest2':
      img = invest2
      break
    case 'agent':
      img = agent
      break
    case 'time':
      img = time
      break
    case 'lead':
      img = lead
      break
    case 'platform':
      img = platform
      break
    case 'livestream':
      img = livestream
      break
    default:
      img = dev
  }
  let icons = [
    dev,
    page_not_found,
    denied,
    business_shop,
    announcement,
    stock,
    responsibility,
    meeting2,
    setup,
    mobile,
    progress,
    sharing,
    learnmore,
    two_factor_auth,
    secure_blockchain,
    chart,
    problem_solving,
    currentlocation,
    done,
    approve,
    experts,
    promote,
    upload,
    deal,
    referral,
    platform,
    calendar,
    livestream,
    email,
    lead,
    time,
    filter,
    finance,
    software,
    files,
    onlinetransaction,
    dashboard2,
    house,
    check,
    offer,
    faq,
    call,
    setting,
    houses,
    meeting,
    growth,
    docs,
    bank,
    blockchain,
    transfer,
    noitems,
    profiles,
    profile,
    home2,
    profile2,
    profile3,
    agreement,
    security,
    dashboard4,
    phone2,
    sell,
    buy,
    invest2,
    agent,
    analytic,
    bar,
    bitcoin2,
    building2,
    calculator,
    card,
    cart,
    chatmobile,
    choosehouse,
    creditcardmobile,
    flyingnotes,
    heart,
    house4,
    house10,
    houselocation,
    housemagnifier,
    houses_walk,
    housesale,
    houseselect,
    mobilehouse,
    money,
    notes,
    settinghouse,
    vaultsafe,
    wallet,
  ]
  img = isRandom ? icons[Math.floor(Math.random() * icons.length)] : img
  return <img src={img} alt="k" style={{ width: '100%', ...style }} />
}

export default getSVG
