function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n > 0) {
    nums1.length = nums1.length - nums2.length;
    for (let i = 0; i < nums2.length; i++) {
      nums1.push(nums2[i]);
    }

    for (let i = 0; i < nums1.length; i++) {
      let min = i;
      for (let j = i + 1; j < nums1.length; j++) {
        if (nums1[j] < nums1[min]) {
          min = j;
        }
      }
      if (min !== i) {
        let tmp = nums1[i];
        nums1[i] = nums1[min];
        nums1[min] = tmp;
      }
    }
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
