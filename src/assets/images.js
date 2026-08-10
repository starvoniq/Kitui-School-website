import gateImg from './gate.jpg'
import logoImg from './logo.jpg'
import adminImg from './admin.jpg'

// Local authentic Kenyan secondary school photography
import classroomImg from './photos/classroom.png'
import academicsHeroImg from './photos/Academics-tab-heroes.jpeg'
import scienceLabImg from './photos/science_lab.png'
import bioLabImg from './photos/bio lab.jpg'
import chemistryLabImg from './photos/chemisty lab.jpg'
import physicsLabImg from './photos/phyc  lab.jpg'
import compLabImg from './photos/comp lab.jpg'
import principalImg from './photos/principal.jpg'
import compoundImg from './photos/compound.png'
import sportsImg from './photos/sports.png'
import libraryImg from './photos/library.png'
import computerLabImg from './photos/computer_lab.png'
import teachersImg from './photos/teachers.png'
import prizeGivingImg from './photos/prize_giving.png'
import dramaImg from './photos/drama.png'
import deputyPrincipalImg from './photos/deputy_principal.png'
import femaleTeacherImg from './photos/female_teacher.png'
import studentLeaderImg from './photos/student_leader.png'
import alumniImg from './photos/alumni.png'
import academicsBackgroundImg from './acadmics background.jpg'

// Teacher profile images
import wambuaImg from './teachers-pics/mrs-wambua.jpg'
import mbuvuaImg from './teachers-pics/mrs-mbuva.jpg'
import gabrielImg from './teachers-pics/mrs-gabriel.jpg'
import aminaImg from './teachers-pics/miss-amina.jpg'
import njeriImg from './teachers-pics/miss-njeri.jpg'
import ombadoImg from './teachers-pics/ms-ombado.jpg'
import njugunaImg from './teachers-pics/mr-njuguna.jpg'
import nzomoImg from './teachers-pics/mr-nzomo.jpg'
import kagemaImg from './teachers-pics/mrs-kagema.jpg'
import otienoImg from './teachers-pics/mr-otieno.jpg'

export const images = {
  gate: gateImg,
  logo: logoImg,
  admin: adminImg,
  heroes: {
    home: gateImg,
    about: compoundImg,
    academics: academicsHeroImg,
    management: teachersImg,
    gallery: prizeGivingImg,
    tour3d: compoundImg,
    contact: gateImg,
  },
  campus: {
    adminTower: adminImg,
    aerialCampus: compoundImg,
    compound: compoundImg,
    boarding: compoundImg,
    sportsField: sportsImg,
    dining: compoundImg,
    diningHall: compoundImg,
  },
  academics: {
    physicsLab: physicsLabImg,
    chemistryLab: chemistryLabImg,
    biologyLab: bioLabImg,
    computerLab: compLabImg,
    library: libraryImg,
    smartClass: classroomImg,
    ictCentre: computerLabImg,
    auditorium: dramaImg,
    studentsClass: classroomImg,
    teacherClass: teachersImg,
    background: academicsBackgroundImg,
  },
  people: {
    principal: principalImg,
    deputyAcademics: deputyPrincipalImg,
    deputyAdmin: deputyPrincipalImg,
    deputyAcademic: deputyPrincipalImg,
    deputyDiscipline: deputyPrincipalImg,
    leadershipGroup: teachersImg,
    deptSciences: deputyPrincipalImg,
    deptMath: femaleTeacherImg,
    deptLanguages: deputyPrincipalImg,
    deptHumanities: femaleTeacherImg,
    deptTechnical: deputyPrincipalImg,
    deptGuidance: femaleTeacherImg,
    bomChair: principalImg,
    bomVice: femaleTeacherImg,
    bomSec: principalImg,
    bomTreas: deputyPrincipalImg,
  },
  gallery: {
    chemistry: scienceLabImg,
    athletics: sportsImg,
    drama: dramaImg,
    admin: adminImg,
    prizeGiving: prizeGivingImg,
    computerLab: computerLabImg,
    football: sportsImg,
    grounds: compoundImg,
    art: dramaImg,
    career: prizeGivingImg,
    boarding: compoundImg,
    physics: scienceLabImg,
  },
  news: {
    exam: classroomImg,
    rugby: sportsImg,
    science: scienceLabImg,
    robotics: computerLabImg,
  },
  testimonials: {
    alumni: alumniImg,
    parent: femaleTeacherImg,
    student: studentLeaderImg,
  },
  teachers: {
    wambua: wambuaImg,
    // Staff photos supplied in public/ are served from the site root.
    kavele: '/Kavele.jpeg',
    katee: '/Chalbi.jpeg',
    mutuku: '/rambo.jpeg',
    mbuva: mbuvuaImg,
    gabriel: gabrielImg,
    tairus: '/Tyro.jpeg',
    tyrus: '/Tyro.jpeg',
    amina: aminaImg,
    njeri: njeriImg,
    ombado: ombadoImg,
    njuguna: njugunaImg,
    nzomo: nzomoImg,
    kagema: kagemaImg,
    otieno: otienoImg,
  },
}
