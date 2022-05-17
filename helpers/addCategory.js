const addCategory = (category) => {
    // uniquie category
    
    const uniqueCategory = [...new Set(category)];
    
    uniqueCategory.forEach((item, index) => {
        uniqueCategory[index] = `${index + 1} ${item}`
    });

    console.log(uniqueCategory);
    return uniqueCategory;

}

module.exports = {
    addCategory
}