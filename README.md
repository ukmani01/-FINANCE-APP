Left side → Sidebar

Right side → Header + Main content








→ Full page layout (sidebar + right area)

 right-container
→ Header + main content arranged vertically

 main-area
→ Shows the page content (Dashboard, Profile)
→ Can scroll
→ Has padding and background

 React Router
→ Changes Dashboard/Profile without refresh




tailwindcss

.fist-dive {
  @apply flex min-h-screen bg-white md:flex-row;
}


flex → layout is flex container

min-h-screen → takes full screen height

bg-white → background white

md:flex-row → on big screens → horizontal layout


.right-container {
  @apply flex-1 flex flex-col;
}


flex-1 → take all remaining width

flex flex-col → vertical layout

This holds Header + Main Area.




.main-area {
  @apply p-6 md:p-8 bg-[#F5F7FA] bg-white flex-1 overflow-y-auto;
}


p-6 md:p-8 → padding

bg-[#F5F7FA] bg-white → background color (white overrides)

flex-1 → take full space

overflow-y-auto → scroll page inside

This renders dashboard pages






This is the main roadmap of this page; I will generate it this way

let CompanyHistory = [];       // store all companies
let TotalSavingHistory = [];   // store total savings


function createCompany(name, salary) {
    return {
        name,
        salary,
        salavuList: [],
        totalSalavu: 0,
        saving: 0,

        addSalavu(itemName, amount) {
            this.salavuList.push({ itemName, amount });
        },

        calculate() {
            this.totalSalavu = this.salavuList.reduce((sum, item) => sum + item.amount, 0);
            this.saving = this.salary - this.totalSalavu;
        },

        display() {
            this.calculate();

            let salavuDetails = this.salavuList
                .map(item => `${item.itemName}: ${item.amount}`)
                .join("\n");

            return `
Company Name: ${this.name}
Salary: ${this.salary}

--- Salavu Details ---
${salavuDetails}

Total Salavu: ${this.totalSalavu}
Saving: ${this.saving}
            `;
        }
    };
}


// -----------------------------------------
// ⭐ FIRST COMPANY
// -----------------------------------------
let c1 = createCompany("sivatextiles", 100);

c1.addSalavu("recharge", 0);
c1.addSalavu("bike petrol", 0);
c1.addSalavu("food", 1);

CompanyHistory.push(c1);


// -----------------------------------------
// ⭐ SECOND COMPANY
// -----------------------------------------
let c2 = createCompany("another company", 100);

c2.addSalavu("newly buy tv", 0);
c2.addSalavu("buying basket", 0);
c2.addSalavu("food", 1);

CompanyHistory.push(c2);


// -----------------------------------------
// ⭐ PREVIEW ALL COMPANIES
// -----------------------------------------
CompanyHistory.forEach((comp, index) => {
    console.log(`\n---- COMPANY ${index + 1} ----`);
    console.log(comp.display());
});


// ----------------------------------------------------
// ⭐⭐ TOTAL SAVING OF ALL COMPANIES (NEW FEATURE)
// ----------------------------------------------------
let totalSaving = CompanyHistory
    .reduce((sum, comp) => sum + comp.saving, 0);

// Save inside new array
TotalSavingHistory.push(totalSaving);

console.log("\n=== TOTAL SAVING OF ALL COMPANIES ===");
console.log("Total Saving =", totalSaving);

console.log("\n=== TOTAL SAVING HISTORY ARRAY ===");
console.log(TotalSavingHistory);
# -SMART-FINANCE-MANAGER
