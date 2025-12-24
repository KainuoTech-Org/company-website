#!/usr/bin/env python3
from PIL import Image
import os
import glob

projects = {
    "Flow Space": ("flow-space-long.png", None),
    "Harbour Trade": ("harbour-trade-long.png", ["demo-trade-kainuotech-2025", "about", "services", "contact"]),
    "Moment Cafe": ("moment-cafe-long.png", None),
    "Retroloop": ("retroloop-long.png", None)
}

def get_sort_key(filename, order_list):
    """根据指定的顺序列表返回排序键"""
    if order_list is None:
        return filename
    
    filename_lower = filename.lower()
    for i, keyword in enumerate(order_list):
        if keyword in filename_lower:
            return (i, filename)
    return (999, filename)  # 未匹配的放在最后

def stitch_screenshots(project_dir, output_filename, order_list=None):
    """将项目文件夹中的所有截图拼接成长图"""
    pattern = os.path.join(project_dir, "*.png")
    image_files = sorted(glob.glob(pattern))
    
    if not image_files:
        print(f"⚠️  {project_dir} 中没有找到截图文件")
        return False
    
    # 如果有指定顺序，按顺序排序
    if order_list:
        image_files = sorted(image_files, key=lambda x: get_sort_key(os.path.basename(x), order_list))
    
    print(f"📸 处理 {project_dir}: 找到 {len(image_files)} 张截图")
    
    images = []
    max_width = 0
    total_height = 0
    
    for img_path in image_files:
        img = Image.open(img_path)
        images.append(img)
        max_width = max(max_width, img.width)
        total_height += img.height
        print(f"   - {os.path.basename(img_path)}: {img.width}x{img.height}")
    
    long_image = Image.new('RGB', (max_width, total_height), color='white')
    
    current_height = 0
    for img in images:
        if img.width < max_width:
            x_offset = (max_width - img.width) // 2
            long_image.paste(img, (x_offset, current_height))
        else:
            long_image.paste(img, (0, current_height))
        current_height += img.height
    
    os.makedirs("img", exist_ok=True)
    output_path = os.path.join("img", output_filename)
    long_image.save(output_path, 'PNG', optimize=True)
    print(f"✅ 已保存: {output_path} ({max_width}x{total_height})")
    return True

def main():
    os.makedirs("img", exist_ok=True)
    print("🚀 开始拼接项目截图...\n")
    
    success_count = 0
    for project_dir, (output_filename, order_list) in projects.items():
        if os.path.exists(project_dir):
            if stitch_screenshots(project_dir, output_filename, order_list):
                success_count += 1
            print()
        else:
            print(f"⚠️  文件夹不存在: {project_dir}\n")
    
    print(f"✨ 完成！成功拼接 {success_count}/{len(projects)} 个项目")

if __name__ == "__main__":
    main()
