import db_connect
import numpy as np
import matplotlib.pyplot as plt
import random
import string

            
        
def get_graph(user):
  db,cur=db_connect.connect('Zzb7flWH2Ucblx8Ok5QqbkfzUKEyffRh')
  #cur.execute('select *from analytics')
  #data = cur.fetchall()  
  x,y=np.array([1,2,3,4]),np.array([10,15,35,23])
  fig = plt.figure(figsize=(15,8))
  ax1 = fig.add_subplot(111)
  ax1.plot(x, y, color='r', marker='o')
  plt.xticks(x)
  plt.xlabel('Day')
  plt.yticks(x)
  plt.ylabel('Count')
  handles, labels = ax1.get_legend_handles_labels()
  lgd = ax1.legend(handles, labels, loc='upper center', bbox_to_anchor=(1.15,1))
  ax1.grid('on')

  
  char_set = string.ascii_uppercase +string.ascii_lowercase+ string.digits
  fname='visits.png'
  plt.savefig(fname ,bbox_inches="tight")
  return fname

        
