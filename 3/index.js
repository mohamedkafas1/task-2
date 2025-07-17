class user {
  #email;
  #id;

  constructor(name, email, id) {
    this.name = name;
    this.#email = email;
    this.#id = id;
  }

  getemail() {
    return this.#email;
  }

  getid() {
    return this.#id;
  }

  setemail(newemail) {
    this.#email = newemail;
  }

  setid(newid) {
    this.#id = newid;
  }

  getinfo() {
    return "info not defined.";
  }
}

class admin extends user {
  constructor(name, email, id) {
    super(name, email, id);
    this.users = [];
  }

  adduser(user) {
    this.users.push(user);
  }

  removeuser(userid) {
    this.users = this.users.filter(u => u.getid() !== userid);
  }

  listusers() {
    this.users.forEach(u => console.log(u.name));
  }

  getinfo() {
    return "admin in the system.";
  }
}

class doctor extends user {
  constructor(name, email, id, specialty) {
    super(name, email, id);
    this.specialty = specialty;
    this.diagnosedpatients = [];
  }

  diagnose(patientname, disease) {
    this.diagnosedpatients.push({ patientname, disease });
  }

  listdiagnosedpatients() {
    this.diagnosedpatients.forEach(p =>
      console.log(`${p.patientname} - ${p.disease}`) // ✅ Corrected template string
    );
  }

  getinfo() {
    return `doctor (${this.specialty}) diagnoses patients.`; // ✅ Corrected template string
  }
}

class patient extends user {
  constructor(name, email, id) {
    super(name, email, id);
    this.appointments = [];
  }

  bookappointment(doctorname, date) {
    this.appointments.push({ doctorname, date });
  }

  viewappointments() {
    this.appointments.forEach(a =>
      console.log(`with Dr. ${a.doctorname} on ${a.date}`) // ✅ Fixed invalid `with` usage and added backticks
    );
  }

  getinfo() {
    return "patient books and attends appointments.";
  }
}

// Sample usage
const admin1 = new admin("admin1", "admin1@hospital.com", 1);
const doctor1 = new doctor("dr-nagham", "nagham@hospital.com", 2, "cardiology");
const patient1 = new patient("ali", "ali@hospital.com", 3);

admin1.adduser(doctor1);
admin1.adduser(patient1);

doctor1.diagnose("ali", "flu");
patient1.bookappointment("dr-nagham", "2025-07-25");

const hospitalusers = [admin1, doctor1, patient1];
hospitalusers.forEach(user => console.log(user.getinfo()));
