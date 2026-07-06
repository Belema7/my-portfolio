const fs = require('fs');
let content = fs.readFileSync('data/posts.ts', 'utf-8');

// Find the section that was appended.
const startIndex = content.indexOf("## Topic 2.4 — HTTP Status Codes: The Server's Mood Ring");

if (startIndex !== -1) {
    // The previous text is correct. The text from startIndex to the end of the post needs backticks escaped.
    // Let's find the end of the post. It ends with '`,' because that's how the post is closed in my script.
    
    // Wait, the post ends with:
    // I'm excited because these concepts are less about syntax and more about **how great APIs are designed**.
    // `,
    const endStr = "I'm excited because these concepts are less about syntax and more about **how great APIs are designed**.\n`,";
    const endIndex = content.indexOf(endStr, startIndex);
    
    if (endIndex !== -1) {
        const before = content.substring(0, startIndex);
        let middle = content.substring(startIndex, endIndex + endStr.length - 2); // Exclude the `,
        const after = content.substring(endIndex + endStr.length - 2); // Includes `,
        
        // Escape all backticks in middle
        middle = middle.replace(/`/g, '\\`');
        
        fs.writeFileSync('data/posts.ts', before + middle + after);
        console.log("Fixed backticks successfully.");
    } else {
        console.log("Could not find the end of the post.");
    }
} else {
    console.log("Could not find the start of the section.");
}
