class RGB(numpy.ndarray):
  @classmethod
  def from_str(cls, rgbstr):
    return numpy.array([
      int(rgbstr[i:i+2], 16)
      for i in range(1, len(rgbstr), 2)
    ]).view(cls)
 
  def __str__(self):
    self = self.astype(numpy.uint8)
    return '#' + ''.join(format(n, 'x') for n in self)
 
c1 = RGB.from_str('#a1b1c1')
print(c1)
c2 = RGB.from_str('#1A1B1C')
print(c2)

print((c1 + c2) / 2)